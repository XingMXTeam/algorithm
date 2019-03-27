/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	// 递归实现。太他妈的精简了。
    let result;

    if(!l1) {
    	return l2;
    }else if(!l2) {
    	return l1;
    }

    if(l1.val<=l2.val) {
    	result = l1;//修改头指针
    	result.next = mergeTwoLists(l1.next, l2);
    }else {
    	result = l2;
    	result.next = mergeTwoLists(l1, l2.next);
    }

    return result;
};