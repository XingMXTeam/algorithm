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
    //遍历一遍。保存每个节点的引用
    let map = {};
    let cur = head;
    let i = 1;
    while (cur) {
        map[i] = {
            index: i,
            cur: cur
        }
        cur = cur.next;
        i++;
    }
    let mid = map[Math.ceil(i / 2)];
    return mid.cur;
};