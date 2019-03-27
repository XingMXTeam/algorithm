/*
Trie树，也称为“字典树”。利用字符串之间的公共前缀，将重复的前缀合并在一起。是一棵多叉树。

适合前缀匹配查找；自动补全输入
*/

class TrieNode {
	constructor(data) {
		this.data = data;
		this.children = new Array(26);
		this.isEnd = false;	
	}
}

class Trie {
	constructor(data) {
		this.root = new TrieNode("/");
	}
	insert(text) {
		let node = this.root;
		for(let char of text) {
			let index = char.charCodeAt() - 'a'.charCodeAt();
			if(!node.children[index]) {
				node.children[index] = new TrieNode(char);
			}
			// 指向下一个节点
			node = node.children[index];
		}
		// 标记叶子节点
		node.isEnd = true;
	}
	find(text) {
		let node = this.root;
		for(let char of text) {
			let index = char.charCodeAt() - 'a'.charCodeAt();
			if(node.children[index]) {
				// 指向下一个节点
				node = node.children[index];
			} else {
				return false;
			}
		}
		return node.isEnd;
	}
}

// 构造一颗字典树
var tree = new TrieTree();
var strs = ["how", "hi", "her", "hello", "so", "see"];
for(let str of strs) {
	tree.insert(str);
}

for(let str of strs) {
	console.log(tree.find(str));
}

console.log(tree.find('world'));







