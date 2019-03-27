class Node {
	constructor(val) {
		this.val =  val;
		this.next = null;
	}
}

class DoubleLinkedList {
	constructor() {
		this.root = new Node("head");
	}
	findByVal(val) {
		let p = this.root;
		while(p&&p.val!=val) {
			p = p.next;
		}
		return p;
	}
	findPrev(val) {
		let p = this.root;
		if(!p) return null;
		while(p.next&&p.next.val!=val) {
			p = p.next;
		}
		return p.next;
	}
	// 在val之后插入
	insert(newVal, val) {
		let targetNode = this.findByVal(val);
		if(!targetNode) {
			return;
		}
		let newNode = new Node(newVal);
		newNode.next = targetNode.next;
		targetNode.next = newNode;
	}
	delete(val) {
		// 必须知道前一个元素
		let targetNode = this.findByVal(val);
		if(!targetNode) {
			return;
		}
		let preNode = this.findPrev(val);
		// 只需要一条语句
		preNode.next = targetNode.next;
	}
	print() {
		let p = this.root;
		while(p) {
			console.log(p.val);
			p = p.next;
		}
	}
}



