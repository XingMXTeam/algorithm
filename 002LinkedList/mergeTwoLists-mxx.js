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
    // 两个指针分别指向链表A和链表B。逐个比较
    // 修改小的那个的指针。
    if(!l1&&!l2) {
        return l1;
    }else if(!l1&&l2) {
        return l2;
    }else if(l1&&!l2) {
        return l1;
    }
    let l1Cur = l1;
    let l1Next;
    let l2Cur = l2;
    let l2Next;
    let head;
    
    // 只要一个链表到结尾就结束循环
    while(l1Cur&&l2Cur) {
        if(l1Cur.val<=l2Cur.val) {
            if(!head) {
                head = l1Cur;
            }
            
            // find then end
            while(l1Cur.next && l1Cur.next.val<=l2Cur.val) {
                l1Cur = l1Cur.next;
            }
            // store next
            l1Next = l1Cur.next;
            // change pointer
            l1Cur.next = l2Cur;
            // move pointer
            l1Cur = l1Next;
        }
        else {
            if(!head) {
                head = l2Cur;
            }
            
            while(l2Cur.next && l1Cur.val>l2Cur.next.val) {
                l2Cur = l2Cur.next;
            }
            l2Next = l2Cur.next;
            l2Cur.next = l1Cur;
            l2Cur = l2Next;
        }
    }
    return head;
};