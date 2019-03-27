/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
 // 翻转链表
var reverse = function(head) {
	// 维护三个指针
	let prev = null;
	let cur  = head;
	let next = null;

	while(cur) {
		// store next
		next = cur.next;

		// reverse(注意点1)
		cur.next = prev;

		// move pointer
		prev = cur;
		cur = next;
	}
	// 注意点2
	head = prev;
	return head;
}

var reverseBetween = function(head, m, n) {
	if(m>=n) return head;

	// 首先要找到这4个位置
	let revsPrev;//翻转起始点前一个
	let revsStart;
	let revsEnd;
	let revsEndNext;//结束点下一个

	// 找到上面指针的位置
	let i=1;
	let cur = head;
	while(cur&&i<=n) {
		// 保存起始点前一个
		if(i<m) {
			revsPrev = cur;	
		}
		// 保存起始点
		if(i==m) {
			revsStart = cur;
		}
		// 结束点
		if(i==n) {
			revsEnd = cur;
			revsEndNext = cur.next;
		}
		cur = cur.next;
		i++;
	}
	// 进行翻转
	revsEnd.next = null;
	// 注意点1
	revsEnd = reverse(revsStart);

	// 修改头
	if(revsPrev) {
		revsPrev.next = revsEnd;
	}else {
		head = revsEnd;
	}
    // 修改尾
    revsStart.next = revsEndNext;
    return head;
}