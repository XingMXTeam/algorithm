/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
	// 通过记录索引，然后计算最左边和最右边的差值来得到宽度。
    if(!root) return 0;
	let result = 0;
	let list = [];
	list.push({node:root,index:1});
	while(list.length>0) {
		let count = list.length;
        // 解决index的值过大。可能溢出问题
        if(count==1) {
			list.push({node:list[0].node, index:1});
			list.shift();
		}
		result = Math.max(list[list.length-1].index-list[0].index+1, result);
		while(count--) {
			let item = list.shift();
			let node = item.node;
			if(node.left) {
				list.push({node: node.left, index: 2*item.index});
			}
			if(node.right) {
				list.push({node: node.right, index: 2*item.index+1});
			}
		}
	}
	return result;
};