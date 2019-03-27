/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    if(!head) return null;
	if(!head.next) return head;
    //遍历一遍,一个走两步一个走一步。
    let slow = head;
    let fast = head;
    // 注意点：这里是fast到尾部前
    while(fast && fast.next) {
    	slow = slow.next;
    	fast = fast.next.next;
    }

    return slow;
};