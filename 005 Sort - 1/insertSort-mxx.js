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
	var hasSwap = false;
	var p1=head;
	var p1pre=null;
	// 已排序
	if(!p1||!p1.next) return head;
	var p=p1.next;
	var ppre=p1;
	// 到终点前
	while(p) {
		// 遍历已排序链表
		while(p1!=p) {
			if(p1.val > p.val) {
				// 进行链表调整
				ppre.next = p.next;
				p.next = p1;
				if(p1pre) {
				  p1pre.next = p;
				}
				// 头结点 
				else {
					head = p;
				}
				hasSwap = true;
				// 结束循环比对
				break;
			}
			// 否则，比较下一个
			p1pre = p1;
			p1 = p1.next;
		}
		// 开启下一轮
		// 未做交换
		if(!hasSwap) {
			ppre = p;
			p = p.next;
		}
		else {
			p = ppre.next;
		}
		// 重置
		p1 = head;
		p1pre=null;
		hasSwap = false;
	}
	return head;		
}

// [4,19,14,5,-3,1,8,5,11,15] 
head = {val:3,next:null};
head1 = {val:1,next:null};
head2 = {val:4,next:null};
// head3 = {val:3,next:null};

head.next = head1;
head1.next = head2;
// head2.next = head3;

var res = insertionSortList(head);

console.log(res);
