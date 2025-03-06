var reversePrint = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.reverse();
};
