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
    var result = [];
    if(!root) return result;
    // 遍历每一层，将节点值保存，并更新队列。repeat，直到队列为空
    var stack = [];
    stack.unshift(root);
    while(stack.length>0) {
        // 遍历每一层
        var t = [];
        var nstack = [];
        for(var i =0;i<stack.length;i++) {
            // 将节点保存
            t.push(stack[i].val);
            // 创建新的队列
            stack[i].left && nstack.push(stack[i].left);    
            stack[i].right && nstack.push(stack[i].right);
        }
        // 更新队列
        stack = nstack;
        // 保存结果
        result.push(t);
    }
    
    return result;
};
//优化写法见binarySearchTree-mxx.js
