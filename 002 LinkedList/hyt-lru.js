// 第二题：LRU

class Node {
    constructor(value, prev, next) {
        this.key = '';
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LRU {
    constructor(size) {
        this.map = new Map();
        this.head = this.tail = new Node(null, null, null);
        this.size = size;
        this.count = 0;
    }
    set(key, value) {
        let node = new Node(value, null, this.head);
        node.key = key;
        this.map.set(key,node);
        this.head.prev = node;
        this.head = node;
        this.count++;
        if (this.count > this.size) {
            this.popTail();
            this.count--;
        }
        return node;
    }
    get(key) {
        let node = this.map.get(key);
        if (node) {
            let prev = node.prev;
            let next = node.next;
            node.prev = null;
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            prev.next = next;
            next.prev = prev;
            return node;
        } else {
            return null;
        }
    }
    popTail() {
        let last = this.tail.prev;
        let lastPrev = last.prev;
        lastPrev.next = this.tail;
        this.tail.prev = lastPrev;
        this.delete(last);
        return last;
    }
    delete(node) {
        this.map.delete(node.key);
    }
    traverse() {
        let node = this.head;
        while (node.next) {
            console.log(node);
            node = node.next;
        }
    }
}


let lru = new LRU(6);
lru.set('qwe1',1);
lru.set('qwe2',2);
lru.set('qwe3',3);
lru.set('qwe4',4);
lru.set('qwe5',5);
lru.set('qwe6',6);
lru.set('qwe7',7);
lru.get('qwe3');
lru.get('qwe4');
// lru.set('qwe7',7);

lru.traverse();
