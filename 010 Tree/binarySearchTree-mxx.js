class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	// 插入某个节点
	insert(val) {
		let newNode = new Node(val);
		if(!this.root) {
			this.root = newNode;
		}else {
			this.insertNode(this.root, newNode);
		}
	}
	insertNode(node, newNode) {
		if(newNode.val<node.val) {
			if(!node.left) {
				node.left = newNode;
			}else {
				this.insertNode(node.left, newNode);
			}
		}else {
			if(!node.right) {
				node.right = newNode;
			}else {
				this.insertNode(node.right, newNode);
			}
		}
	}
	// 删除某个节点：比较复杂
	delete(val) {
		this.root = this.deleteNode(this.root, val);
	}
	deleteNode(node, val) {
		if(!node) {
			return null;
		}
		else if(node.val>val) {
			node.left = this.deleteNode(node.left, val);
			return node;
		}
		else if(node.val<val) {
			node.right = this.deleteNode(node.right, val);
			return node;
		}
		// 当前节点就是要删除的节点
		else {
			if(!node.left&&!node.right) {
				node = null;
				return node;
			}
			if(!node.left) {
				node = node.right;
				return node;
			}
			else if(!node.right) {
				node = node.left;
				return node;
			}
			// 左右子树都存在。
			// 需要从右子树中找到最小节点，替换当前节点。
			let minNode = this.findMinNode(node.right);
		    node.val = minNode.val;
		    // 然后把右子树中最小节点删除
		    node.right = this.deleteNode(node.right, minNode.val);
		    return node;
		}
	}
	findMinNode(node) {
		if(!node.left) {
			return node;
		}else {
			return this.findMinNode(node.left);
		}
	}
	// 搜索某个节点
	find(val) {
		return this.findNode(this.root, val);
	}
	findNode(node, val) {
		if(!node) {
			return null;
		}
		else if(node.val<val) {
			return this.findNode(node.right, val);
		}
		else if(node.val>val) {
			return this.findNode(node.left, val);
		}
		else {
			return node;
		}
	}

	// 前序遍历
	preOrder(node) {
		// if(node) {
		// 	console.log(node.val);
		// 	this.preOrder(node.left);
		// 	this.preOrder(node.right);
		// }
		if(!node) {
			return;
		}
		let stack = [];
		let node;
		stack.push(node);
		while(stack.length>0) {
			node = stack.pop();
			// root, left, right
			console.log(node.val);
			if(node.right) {
				stack.push(node.right);
			}
			if(node.left) {
				stack.push(node.left);
			}
		}
	}
	// 中序遍历
	inOrder(node) {
		if(!node) {
			return;
		}
		let stack = [];
	
		while(node||stack.length>0) {
			while(node) {
				stack.push(node);
				node = node.left;
			}
			node = stack.pop();
			console.log(node.val);
			node = node.right;
		}
	}
	// 后序遍历：用两个栈实现
	// 任意一个节点。先打印左边再打印右边。最后打印自身节点。
	postOrder(node) {
		if(!node) return;

		let stack1 = [];
		let stack2 = [];

		stack1.push(node);
		
		while(stack1.length>0) {
			node = stack1.pop();
			// root, right, left
			stack2.push(node);

			if(node.left) {
				stack1.push(node.left);
			}
			if(node.right) {
				stack1.push(node.right);
			}
		}
		return stack2.revserse();
	}
	// 层序遍历
	levelOrder(node) {
		if(!node) return;
		let q = [];
		q.push(node);
		while(q.length>0) {
			node = q.shift();
			console.log(node.val);
			// 不需要把节点保存。因为q本身就可以
			if(node.left) {
				q.push(node.left);
			}
			if(node.right) {
				q.push(node.right);
			}
		}
	}
}




















