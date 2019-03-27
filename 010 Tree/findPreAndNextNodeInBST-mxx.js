//实现查找二叉查找树中某个节点的后继、前驱节点
const findPreNodeInBST = function(root, k) {
	//中序遍历。
	if(!root) return;
	let stack = [];
	let pre=null;
	while(root||stack.length>0) {
		while(root) {
		    stack.push(root);
			root = root.left;
		}
		root = stack.pop();
		if(root.val==k.val) {
			return pre;
		}
		pre = root;//易错点：在这里保存上一次节点
		root = root.right;
	}
	return pre;
}

const findNextNodeInBST = function(root, k) {
	//中序遍历。
	if(!root) return;
	let stack = [];
	let pre=null;
	// 栈为空或者当前节点为null时，退出循环
	while(root||stack.length>0) {
		while(root) {
			stack.push(root);
			root = root.left;
		}
		root = stack.pop();
		if(pre && pre.val==k.val) {
			return root;
		}
		pre = root;
		root = root.right;
	}
	return null;
}