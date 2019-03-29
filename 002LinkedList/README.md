# 007 LinkedList

## Content

LinkedList

从我上百场面试的经验来看，能把“链表反转”这几行代码写对的人不足 10%。

如果你真的能花上一个周末或者一整天的时间，就去写链表反转这一个代码，多写几遍，一直练到能毫不费力地写出 Bug free 的代码。
一定要有量。再科学的方法，没有量，都是徒劳。

写链表代码技巧：
1 理解指针
变量赋值给指针，就是这个变量的地址赋值给指针。也就是说，
指针存储了这个变量的地址，可以通过地址找到这个变量。

p.next = q;表示p的next指针存储了q的内存地址

2 警惕指针丢失和内存泄漏

// 插入节点x，指针丢失写法。注意操作顺序。
p.next = x;
x.next = p.next。

//删除节点。如果是C语言，注意释放内存。

3 利用哨兵简化实现难度

链表的插入、删除操作，需要对插入第一个节点和
删除最后一个节点的情况进行特殊处理。

带头链表，头尾节点不存储数据。

利用哨兵简化编程难度的技巧，在很多代码实现中都有用到，比如插入排序、归并排序、动态规划等。这些内容我们后面才会讲，

举个例子：比如在数组中找一个元素。可以将数组最后一个
值替换为要找的元素。
while(a[i]!=key) { i++ } 可以去掉i小于n这个比较操作。

4 留意几个边界条件（写任何代码的时候都要考虑边界或者异常情况下
链表为空；
链表只有一个节点；
只有两个节点；
处理头结点和尾节点能否正常工作

5 画图，释放脑容量，更多逻辑思考

6 多练
现在我写这些代码，简直就和“玩儿”一样，其实也没有什么技巧，就是把常见的链表操作都自己多写几遍，出问题就一点一点调试，熟能生巧！

单链表反转
链表中环的检测
两个有序的链表合并
删除链表倒数第n个结点
求链表的中间结点

练习题LeetCode对应编号：206，141，21，19，876。

（面试官喜欢手写链表代码原因：考验一个人是否细心，考虑问题全面，思维是否缜密）
不用想太久。有些办法不是你能想到的。先解决，再想优化解。最重要是能熟练写出代码。

内存池？

## Question

1. 实现单链表、循环链表、双向链表，支持增删操作

2. [Reverse Linked List II - Medium](https://leetcode.com/problems/reverse-linked-list-ii/)

3. [Merge Two Sorted Lists - Easy](https://leetcode.com/problems/merge-two-sorted-lists/)

4. [Middle of the Linked List - Easy](https://leetcode.com/problems/middle-of-the-linked-list/)

5. [Add Two Numbers - Medium](https://leetcode.com/problems/add-two-numbers/)

7. [Linked List Cycle - Easy](https://leetcode.com/problems/linked-list-cycle/)

8. LRU: 时间复杂度为O(n)

9. 判断一个字符串（单链表存储）是回文
时间复杂度是O(n) 空间复杂度是O(1)


