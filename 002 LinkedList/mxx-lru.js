// 双向链表实现
function Node(val) {
	this.val = val||null;
    this.next = null;
    this.pre = null;
}

function LinkedList(node) {
	this.root = node;
}

LinkedList.prototype.find = function(val) {
	var p = this.root.next;
	if(!p) return null;
	while(p && p.val != val) {
		p =  p.next;
	}
	return p;
}

LinkedList.prototype.delete = function(node) {
	var p = this.find(node.val), next, pre;
	if(p) {
		// 中间节点
		if(p.next) {
			next = p.next;
			pre = p.pre;
			next.pre = pre;
			pre.next = next;
		}
		// 尾节点
		else {
			p.pre.next = null;
		}
	}
	return p;
}

LinkedList.prototype.deleteLast = function() {
	var p = this.root;
	// 找到最后一个节点
	while(p.next) {
		p = p.next;
	}
	this.p = this.p.pre;
	this.p.next = null;
}

LinkedList.prototype.insertHead = function(node) {
	// 先操作自己的next
	node.next = this.root.next;
	node.pre = this.root;
	// 再操作next
	if(this.root.next) this.root.next.pre = node;
	// 再操作自己
	this.root.next = node;
}

LinkedList.prototype.insertTail = function(node) {
	var p = this.root;
	while(p.next) {
		p = p.next;
	}
	p.next = node;
	node.pre = p;
}

LinkedList.prototype.printAll = function() {
	var p = this.root;
	while(p.next) {
		console.log(p.next.val);
		p = p.next;
	}
}


function LRU(size){
	this.MAX = size || 100;
	this.count = 0;
	
	// 初始化缓存
	this.linkedList = new LinkedList(new Node());
}

// 如果已经在队列中，拿到这个结点。然后删除这个节点，并将它插入到链表头部。
LRU.prototype.get = function(val) {
	var p = this.linkedList.find(val);
	if(p) {
		this.linkedList.delete(p);
		this.linkedList.insertHead(p);
	}
	return p;
}

// 如果缓存未满，则插入到链表的头部
// 否则删除链表尾部元素，插入到链表头部
LRU.prototype.set = function(val) {
	var node = new Node(val);
	if(this.count<this.MAX) {
		this.linkedList.insertHead(node);
	}else {
		this.linkedList.deleteLast();
		this.count--;
		this.linkedList.insertHead(node);
	}
	this.count++;
}

LRU.prototype.printAll = function() {
	this.linkedList.printAll();
}


var lru = new LRU(100);
lru.set('a');
lru.set('b');
lru.set('c');
lru.set('d');
lru.printAll();
lru.get('b');
console.log("----------");
lru.printAll();
debugger;
lru.get('a');
console.log("----------");
lru.printAll();




