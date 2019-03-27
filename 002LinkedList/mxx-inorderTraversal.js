/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result = [];
    
    // 通过栈实现
    var stack = [];
    
    while(root||stack.length>0) {
        // go left deep
        while(root) {
            stack.push(root);
            root = root.left;
        }
        if(stack.length>0){
            root = stack.pop();
            // 再根
            result.push(root.val);
            // 再右：开启新一轮
            root = root.right;
        }
    }
    return result;
};