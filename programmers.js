// Node 클래스: 단일 노드 정의
class Node {
  constructor(data) {
    this.data = data;      // 현재 노드에 저장된 데이터
    this.nextNode = null;  // 다음 노드를 가리키는 포인터
  }

  updateData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  setNextNode(node) {
    this.nextNode = node;
  }

  getNextNode() {
    return this.nextNode;
  }
}

// LinkedList 클래스
class LinkedList {
  constructor() {
    this.firstNode = null;
    this.listSize = 0;
  }

  // 마지막에 데이터 추가
  add(data) {
    const newNode = new Node(data);

    if (this.firstNode === null) {
      this.firstNode = newNode;
    } else {
      let node = this.firstNode;
      while (node.getNextNode() !== null) {
        node = node.getNextNode();
      }
      node.setNextNode(newNode);
    }

    this.listSize++;
  }

  // 특정 인덱스의 값 가져오기
  get(index) {
    let node = this.firstNode;
    for (let i = 0; i < index; i++) {
      node = node.getNextNode();
    }
    return node.getData();
  }

  // 특정 인덱스의 값 제거
  remove(index) {
    if (index === 0) {
      this.firstNode = this.firstNode.getNextNode();
    } else {
      let frontNode = null;
      let deleteNode = this.firstNode;
      for (let i = 0; i < index; i++) {
        frontNode = deleteNode;
        deleteNode = deleteNode.getNextNode();
      }
      frontNode.setNextNode(deleteNode.getNextNode());
      // JS는 GC가 있으므로 deleteNode = null 생략 가능
    }
    this.listSize--;
  }

  // 특정 인덱스의 값 수정
  set(index, data) {
    let node = this.firstNode;
    for (let i = 0; i < index; i++) {
      node = node.getNextNode();
    }
    node.updateData(data);
  }

  // 리스트의 크기
  size() {
    return this.listSize;
  }
}

// 테스트
const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);

for (let i = 0; i < list.size(); i++) {
  console.log(list.get(i)); // 10, 20, 30
}

list.set(1, 25);
list.remove(0);

for (let i = 0; i < list.size(); i++) {
  console.log(list.get(i)); // 25, 30
}
