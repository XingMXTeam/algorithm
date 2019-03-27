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
    // 假设在左子树找到LCA，右子树找到LCA。能确定当前的LCA。
    // 所以很容易想到递归的思路。
    // 递归终止条件是：节点为null或者有一个节点为p或者q。（应该注意的地方）
    if(!root||root==q||root==p) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if(!right) {
        return left;
    }
    if(!left) {
        return right;
    }
    return root;
};