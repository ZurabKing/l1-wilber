function ListNode(value) {
  this.value = value;
  this.next = null;
}

function jsonToLinkedList(json) {
  const jsonArray = JSON.parse(json);

  const first = new ListNode(jsonArray[0]);
  let current = first;

  for (let i = 1; i < jsonArray.length; i++) {
    const newNode = new ListNode(jsonArray[i]);
    current.next = newNode;
    current = newNode;
  }

  return first;
}

const json = JSON.stringify([{ id: 1 }, { id: 2 }, { id: 3 }]);
const linkedList = jsonToLinkedList(json);
