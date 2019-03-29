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
    let dummyNode = new ListNode(0);
    let lastNode = dummyNode;
    while(l1&&l2) {
        if(l1.val<l2.val) {
            lastNode.next = l1;
            l1 = l1.next;
        }else {
            lastNode.next = l2;
            l2 = l2.next
        }
        lastNode = lastNode.next;
    }
    if(l2) {
        lastNode.next = l2;
    }else {
        lastNode.next = l1;
    }
    return dummyNode.next;
};