class Node{
	constructor(val) {
		this.val = val;
		this.next = null;
		this.pre = null;
	}
}

// 注意插入时操作顺序
class CircleLinkedList {
	constructor() {
		this.root = new Node('head');
	}
	findByVal(val) {
		let p = this.root;
		while(p&&p.val!=val) {
			p = p.next;
		}
		return p;
	}
	insert(newVal, val) {
		let targetNode = this.findByVal(val);
		if(!targetNode) {
			return;
		}
		let newNode = new Node(newVal);
		// 一个原则：最后处理targetNode
		newNode.next = targetNode.next;
		newNode.pre = targetNode;
		if(targetNode.next) {
			targetNode.next = newNode;
		}
		targetNode.next = newNode;
	}
	delete(val) {
        // 必须知道前一个元素
		let targetNode = this.findByVal(val);
		if(!targetNode) {
			return;
		}
		let preNode = targetNode.pre;
		preNode.next = targetNode.next;
		if(targetNode.next) {
			targetNode.next = preNode;
		}
	}
	print() {
		let p = this.root;
		while(p) {
			console.log(p.val);
			p = p.next;
		}
	}
}

let list = new CircleLinkedList();
list.insert('aaa', 'head');
list.insert('bbb', 'aaa');
list.insert('ccc', 'head');
list.print();
list.delete('bbb');
console.log("-------");
list.print();





