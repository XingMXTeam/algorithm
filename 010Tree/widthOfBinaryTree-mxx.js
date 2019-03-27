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
    if(!root) return 0;
    var result = [];
    var stack = [];
    stack.push(root);
    while(stack.length>0) {
        // 保存每一层的值
        var t = [];
        // 更新下一次遍历的栈
        var nstack = [];
        // 遍历每一层
        for(var i=0;i<stack.length;i++) {
            // 首次必须不为0
            if(t.length==0) {
               if(stack[i]) {
               	 t.push(stack[i]);
               }
               // 跳过为null的值，避免堆栈溢出
               else {
               	 continue;	
               }
            }else {
               t.push(stack[i]);
            }
            if(stack[i]) {
                nstack.push(stack[i].left);
                nstack.push(stack[i].right);
            } else {
            	nstack.push(null);
            	nstack.push(null);
            }
        }
        
        if(t.length>0) {
        	result.push(t);
        	stack = nstack;
        }else {
        	stack = [];
        }
    }
    var max = 0;
    result.forEach(function(arr) {
    	// 统计有效长度
    	var len = 0;
        arr.reverse().some(function(item, index, arr) {
        	if(item!=null) {
        		len = arr.length-index;
        		return true;
        	}
        	return false;
        });
        // 求最大宽度
        if(len>max) {
        	max = len;
        }
    });
    
    
    return max;
};

var treeNode = {val:0,left:null,right:null};
var treeNode2 = {val:0, left: null, right:null};
var treeNode3 = {val: 0, left: null, right: null};
var treeNode4 = {val: 0, left: null, right: null};
var treeNode5 = {val: 0, left: null, right: null};
var treeNode6 = {val: 0, left: null, right: null};
var treeNode7 = {val: 0, left: null, right: null};

treeNode.right = treeNode2;
treeNode2.right   = treeNode4;
treeNode4.right = treeNode5;
treeNode5.right = treeNode6;
treeNode6.right = treeNode7;

var a = widthOfBinaryTree(treeNode);
console.log(a);


