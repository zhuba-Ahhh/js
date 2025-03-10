(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
      ? define(['exports'], factory)
      : ((global = global || self), factory((global.Redux = {})));
})(this, function (exports) {
  'use strict';
  /* createStore */
  /**
   *
   * @param {Function} reducer 返回下一个状态树的函数，参数为当前状态和 action
   * @param {any} preloadedState state 的初始状态
   * @param {*} enhancer 增强器 用来指定第三方件——比如中间件，比如 applyMiddleware
   * @returns store 可读、可派发事务、可监听事件
   */
  function createStore(reducer, preloadedState, enhancer) {
    /* 忽略 preloadedState ，第二个参数传 enhancer 时 */
    if (
      typeof preloadedState === 'function' &&
      typeof enhancer === 'undefined'
    ) {
      enhancer = preloadedState;
      preloadedState = undefined;
    }
    /* 有 enhancer ，就直接返回*/
    if (typeof enhancer === 'function') {
      return enhancer(createStore)(reducer, preloadedState);
    }
    /* 初始化 状态、监听器 */
    let state = preloadedState;
    const listeners = [];
    /* store 的三个核心方法 */

    /**
     * 获取状态树
     * @returns 应用程序当前的状态树
     */
    function getState() {
      return state;
    }

    /**
     * 订阅
     * @param {Function} listener 每次派发时都会调用的回调
     * @returns {Function} 取消订阅的函数
     */
    function subscribe(listener) {
      listeners.push(listener);
      return function unsubscribe() {
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    }

    /**
     * 派发一个 action，触发状态修改的唯一途径
     * 并会触发所有监听回调
     * @param {Object} action 一个代表“发生什么变化”的对象
     * @returns {Object} 返回传入的 action
     */
    function dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
      return action;
    }

    /* 创建 store 后会先派发一个 "INIT" action 来初始化，填充初始状态树 */
    dispatch({ type: '@@redux/INIT' }); //源码中 ActionTypes.INIT

    /* 返回 store */
    return { getState, dispatch, subscribe };
  }

  /* compose */
  /**
   * 将函数从右到左组合在一起
   * @param  {...Function} fns 要组合的函数
   * @returns	从右到左组合后的函数 `compose(f, g, h) -> (...args) => f(g(h(...args)))`
   */
  function compose(...fns) {
    if (fns.length === 0) return arg => arg;
    if (fns.length === 1) return fns[0];
    return fns.reduce(
      (a, b) =>
        (...args) =>
          a(b(...args))
    );
  }

  /* applyMiddleware 用箭头函数写会简洁很多，但也是真晕 */

  function applyMiddleware(...middlewares) {
    return function (createStore) {
      return function (reducer, prepreloadedState) {
        const store = createStore(reducer, prepreloadedState);
        const middlewareAPI = {
          getState: store.getState,
          /* 这里 dispatch 包裹一层的原因：
					保证每一层 middleware 拿到的是最新的 dispatch
					*/
          dispatch: action => dispatch(action),
        };
        // 给每一个 middleware 传入 store —— 所以 middleware 第一层函数接收 store
        const chain = middlewares.map(middleware => middleware(middlewareAPI));
        // 将 chain 合入 —— 所以 middleware 第二层函数要接收 next，指向下一个中间件 or 原始 dispatch
        const dispatch = compose(...chain)(store.dispatch);
        return { ...store, dispatch };
      };
    };
  }

  /* combineReducers */
  /**
   *	将传入的多个 reducer 合为一个 reducer
   * @param  {Object} reducers
   * @returns	{Function} 内部调用传入的所有 reducers
   */
  function combineReducers(reducers) {
    //返回一个 reducer
    return function combination(state = {}, action) {
      const nextState = {};
      let hasChanged = false;
      for (const key in reducers) {
        /* 前后的 state */
        const preStateForKey = state[key];
        const nextSateForKey = reducers[key](preStateForKey, action);
        nextState[key] = nextSateForKey;
        hasChanged = hasChanged || preStateForKey !== nextSateForKey;
      }
      return hasChanged ? nextState : state;
    };
  }

  exports.createStore = createStore;
  exports.compose = compose;
  exports.applyMiddleware = applyMiddleware;
  exports.combineReducers = combineReducers;
});
