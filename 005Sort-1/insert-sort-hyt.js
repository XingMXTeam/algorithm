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
var insertionSortList = function(head) {
    if (!head || !head.val) {
        return head;
    }
    let node = head;
    while (node.next) {
        let active = node.next;
        if (node.val > active.val) {
            node.next = active.next;
            if (head.val > active.val) {
                active.next = head;
                head = active;
            } else {
                let first = head;
                while (head != active) {
                    if (head.next.val > active.val) {
                        active.next = head.next;
                        head.next = active;
                    }
                    head = head.next;
                }
                head = first;
            }
        } else {
            node = node.next;
        }
        
    }
    return head;
};

head = {val:4,next:null};
head1 = {val:2,next:null};
head2 = {val:1,next:null};
head3 = {val:3,next:null};

head.next = head1;
head1.next = head2;
head2.next = head3;

let res = insertionSortList(head);

console.log(res);