/**
 * 事件代理实现
 * 包含冒泡和捕获两种模式的实现
 */

type EventHandler = (event: Event) => void;

interface DelegationOptions {
  capture?: boolean;
  stopPropagation?: boolean;
  preventDefault?: boolean;
}

// 事件代理 - 冒泡模式
export function delegateEvent(
  parent: HTMLElement,
  selector: string,
  eventType: string,
  handler: EventHandler,
  options: DelegationOptions = {}
): () => void {
  const listener = (event: Event) => {
    const target = event.target as HTMLElement;
    const delegateTarget = target.closest(selector);

    if (delegateTarget && parent.contains(delegateTarget)) {
      if (options.stopPropagation) {
        event.stopPropagation();
      }
      if (options.preventDefault) {
        event.preventDefault();
      }
      handler.call(delegateTarget, event);
    }
  };

  parent.addEventListener(eventType, listener, options.capture);

  // 返回解绑函数
  return () => {
    parent.removeEventListener(eventType, listener, options.capture);
  };
}

// 事件代理 - 捕获模式
export function delegateEventCapture(
  parent: HTMLElement,
  selector: string,
  eventType: string,
  handler: EventHandler,
  options: DelegationOptions = {}
): () => void {
  return delegateEvent(parent, selector, eventType, handler, {
    ...options,
    capture: true,
  });
}

// 混合代理 - 支持多个选择器
export function delegateEvents(
  parent: HTMLElement,
  delegateMap: {
    [selector: string]: {
      [eventType: string]: {
        handler: EventHandler;
        options?: DelegationOptions;
      };
    };
  }
): () => void {
  const unbindFunctions: Array<() => void> = [];

  Object.entries(delegateMap).forEach(([selector, events]) => {
    Object.entries(events).forEach(([eventType, { handler, options }]) => {
      const unbind = delegateEvent(
        parent,
        selector,
        eventType,
        handler,
        options
      );
      unbindFunctions.push(unbind);
    });
  });

  // 返回批量解绑函数
  return () => {
    unbindFunctions.forEach(unbind => unbind());
  };
}
