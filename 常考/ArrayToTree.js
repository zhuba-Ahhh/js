let arr = [{
    id: 1,
    name: '部门1',
    pid: 0
  },
  {
    id: 2,
    name: '部门2',
    pid: 1
  },
  {
    id: 3,
    name: '部门3',
    pid: 1
  },
  {
    id: 4,
    name: '部门4',
    pid: 3
  },
  {
    id: 5,
    name: '部门5',
    pid: 4
  },
  {
    id: 6,
    name: '部门6',
    pid: 0
  },
]

function list2tree(arr) {
  let map = {}
  let newArr = []
  //先根据pid排个序,,这是个树形结构,pid越小说明越上层,
  arr.sort((a, b) => a.pid - b.pid)
  for (let obj of arr) {
    map[obj.id] = obj
    if (obj.pid === 0) newArr.push(obj)
    else {
      if (map[obj.pid].children) map[obj.pid].children.push(obj)
      else map[obj.pid].children = [obj]
    }
  }
  return newArr
}
list2tree(arr)
console.log(arr);


// O(2^n)
/**
 * 递归查找，获取children
 */
const getChildren = (data, result, pid) => {
  for (const item of data) {
    if (item.pid === pid) {
      const newItem = {...item, children: []};
      result.push(newItem);
      getChildren(data, newItem.children, item.id);
    }
  }
}
/**
* 转换方法
*/
const arrayToTree = (data, pid) => {
  const result = [];
  getChildren(data, result, pid)
  return result;
}

// O(2n)
function arrayToTree(items) {
  const result = [];   // 存放结果集
  const itemMap = {};  // 
    
  // 先转成map存储
  for (const item of items) {
    itemMap[item.id] = {...item, children: []}
  }
  
  for (const item of items) {
    const id = item.id;
    const pid = item.pid;
    const treeItem =  itemMap[id];
    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        }
      }
      itemMap[pid].children.push(treeItem)
    }

  }
  return result;
}

// O(n)
function arrayToTree(items) {
  const result = [];   // 存放结果集
  const itemMap = {};  // 
  for (const item of items) {
    const id = item.id;
    const pid = item.pid;

    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      }
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]['children']
    }

    const treeItem =  itemMap[id];

    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        }
      }
      itemMap[pid].children.push(treeItem)
    }

  }
  return result;
}