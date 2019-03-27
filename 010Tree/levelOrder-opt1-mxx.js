/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let result = [];

	let q = [];
	q.push(root);
	while(q.length>0) {
		// 栈中刚好保存的是一层的所有节点
		let oneLevel = [];
		// 保存上一次的宽度
		let j = q.length;
		for(let i=0;i<j;i++) {
			// 遍历部分必须放在这个for循环里面。保证j的长度不变
			root = q.pop();
			oneLevel.push(root);
			if(root.right) {
				q.push(root.right);
			}
			if(root.left) {
				q.push(root.left);
			}
		}
		result.push(oneLevel);
	}
	return result;
};
