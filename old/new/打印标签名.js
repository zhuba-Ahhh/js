function printAllTags(node) {
  // 如果节点为元素节点，则打印其标签名
  if (node.nodeType === Node.ELEMENT_NODE) {
    console.log(node.tagName);
  }

  // 遍历当前节点的子节点
  var children = node.childNodes;
  for (var i = 0; i < children.length; i++) {
    // 对于每个子节点，递归调用printAllTags函数
    printAllTags(children[i]);
  }
}
