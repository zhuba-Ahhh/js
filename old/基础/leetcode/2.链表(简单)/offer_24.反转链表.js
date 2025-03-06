var reverseList = function (head) {
  let current = head;
  let previous = null;

  while (current) {
    let temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }

  return previous;
};
