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
var addTwoNumbers = function(l1, l2) {
    // 思路：逐位相加。进位保留
    let carry = 0;
	let n = new ListNode(0);
    let root = n; 
	let v1;
	let v2;
	let val;
	while(l1||l2||carry) {
		// 初始值为0
		v1 = v2 = 0;
		if(l1) {
			v1 = l1.val;
			l1 = l1.next;
		}
		if(l2) {
			v2 = l2.val;
 			l2 = l2.next;
		}
        let sum = v1+v2+carry;
		carry = Math.floor(sum/10);//注意点。Js可能出现小数
		val = sum%10;
		n.next = new ListNode(val);
		n = n.next;
	}
	// 除去首节点
	return root.next;
};