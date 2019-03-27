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
var zigzagLevelOrder = function(root) {
    // 层序遍历。然后找到
    if(!root) return [];
    let result = [];
    
    let stack = [];
    stack.push(root);
    let level=1;
    while(stack.length>0) {
        let temp = [];
        let len = stack.length;
        for(let i=0;i<len;i++) {
            if(level%2==0) {
                temp.unshift(stack[0].val);    
            }else {
                temp.push(stack[0].val);
            }
            
            root = stack.shift();//error1
            if(root.left) {
                stack.push(root.left);
            }
            if(root.right) {
                stack.push(root.right);
            }
        }
        level++;
        result.push(temp);
    }
    return result;
};