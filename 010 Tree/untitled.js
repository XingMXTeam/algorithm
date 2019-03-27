/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let path1 = [];
	let path2 = [];
	// root里找k，路径存储在path
	let findPath = function(root, path, k) {
		if(!root) return false;
		path.push(root);
		if(root.val==k.val) return true;
		if(root.left && findPath(root.left, path, k)) {
			return true;
		}
		if(root.right && findPath(root.right, path,k)) {
			return true;
		}
		// 如果在左右子树都没有找到。则当前路径不需要。
		path.pop();
		return false;
	} 
	let res1 = findPath(root, path1, p);
	let res2 = findPath(root, path2, q);
	if(!res1||!res2) return -1;
	let i;
	for(i=0;i<path1.length&&i<path2.length;i++) {
		if(path1[i].val!=path2[i].val) {
			break;
		}
	}
	// 返回上一个不同的节点
	return path1[i-1];
};