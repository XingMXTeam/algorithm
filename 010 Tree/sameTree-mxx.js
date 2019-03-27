/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p==null && q!=null) return false;
    if(p&&q==null) return false;
    // 把树中序遍历，转为两个队列。然后比较队列
    var stack1 = [],stack2=[];
    while((p || stack1.length>0) && (q || stack2.length>0)) {
        // left deep
        while(p) {
            stack1.push(p);
            p = p.left;
        }
        while(q) {
            stack2.push(q);
            q = q.left;
        }
        // 比较路径
        if(stack1.length!=stack2.length) {
            return false;
        }
        p = stack1.pop();
        q = stack2.pop();
        // 比较值
        if(p.val!=q.val) {
            return false;
        }
        // turn right
        p = p.right;
        q = q.right;
    }
    // 有可能有一个没遍历完
    return stack1.length==stack2.length;
}