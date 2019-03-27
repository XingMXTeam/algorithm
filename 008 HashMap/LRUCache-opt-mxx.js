class Node {
	constructor(key, val) {
		this.key = key;//用于从节点拿到key，删除散列表中的某一项。
		this.val = val;
		this.pre = null;
		this.next = null;
	}
}

// 简单点说就是：缓存对象有：一个数组（散列表），数组的元素不仅仅是一个整数，
// 而是一个对象，有前后指针，可以方便的插入和删除操作。
class LRUCache {
	constructor(size) {
        // 缓存容量
		this.size = size;
        this.count = 0;
        // 散列表
		this.hashMap = new Map();
		// 双向链表。有头尾节点。便于插入操作代码编写
		this.head = new Node(0, 0);
		this.tail = new Node(0, 0);
		this.head.next = this.tail;
		this.head.pre = null;
		this.tail.pre = this.head;
		this.tail.next = null;
	}
	deleteNode(node) {
		node.pre.next = node.next;
		node.next.pre = node.pre;
	}
	addToHead(node) {
        // 修改插入节点的右边指针
		node.next = this.head.next;
		node.next.pre = node;
        // 修改插入节点的左边指针
		node.pre = this.head;
		this.head.next = node;
	}
	get(key) {
		let node = this.hashMap.get(key);
		if(node) {
			// 删除节点
			this.deleteNode(node);
			// 插入到头部
			this.addToHead(node);
			return node.val;
		}
		return -1;
	}
	put(key, val) {
		let node = this.hashMap.get(key);
		if(node) {
            // 更新值
			node.val = val;
            // 更新缓存队列
			this.deleteNode(node);
			this.addToHead(node);
		}else {
            // 新节点
			let newNode = new Node(key, val);
			this.hashMap.set(key, newNode);
			if(this.count<this.size) {
				this.count++;
				this.addToHead(newNode);
			}
            // 容量不足
            else {
                // 删除最后一个节点：tail前一个才是最后节点。
				this.hashMap.delete(this.tail.pre.key);
				this.deleteNode(this.tail.pre);
				this.addToHead(newNode);
			}
		}
	}
}