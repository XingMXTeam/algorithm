# 刷题要点

1 先思考20分钟

2 BugFree: 尽量不要调试，限制时间和提交次数

3 总结归类

# 刷题总结

## 数据结构
1对1关系(线性)

数据结构 | 特点 |  备注
---- | ---- | ---
LinkedList | 支持下标随机存取 时间复杂度为O(1) | 
Array | 插入删除时间复杂度为O(1) | 
Stack | 先进后出 | 
Queue | 先进先出 | 
Heap | 优先队列的一种。能够在logn时间复杂度取出一个集合的最小值和最大值。 | 
HashMap | 是数组的一种扩展结构，具有数组的特点。 | key不能直接映射到位置，需要散列函数计算得到hash值。然后得到对应的值。


1对多关系

数据结构 | 特点 |  备注
---- | ---- | ---
Tree | 是链表的一种扩展结构，具有链表的特点。 | 
BinarySearchTree (二叉查找树、二叉搜索树、二叉排序树)| 左子树小于root小于右子树 | 
AVL(二叉平衡树) | 一种特殊的二叉查找树 左右子树的高度差不超过1 | 
完全二叉树 |  | 
满二叉树 |  | 

树的时间复杂度和深度有关系还是节点个数？
时间复杂度和高度成正比



1对多关系

Graph:


## 算法

递归：适用于子问题能推导出父问题。能写出简单的代码。

贪心

动态规划

排序算法

回溯法


## 问题分类

字符串问题

排序问题

数组PrefixSum-SubArray问题

链表翻转操作问题

回溯法subset和排列问题

背包问题

## 问题汇总


Title | Solution |  Data Structure | Algo | Category
---- | ---- | --- | --- | ---
[Search in Rotated Sorted Array - Medium](https://leetcode.com/problems/search-in-rotated-sorted-array/) | [javascript](./001Array/numFriendRequests-opt1-mxx.js)| Array 
[Friends Of Appropriate Ages - Medium](https://leetcode.com/problems/friends-of-appropriate-ages/)| [javascript](./001Array/searchInRoatedArr-mxx-opt1.js) | Array
实现单链表，支持增删操作 | [javascript](./002LinkedList/simpleLinkedList-mxx) | LinkedList
循环链表，支持增删操作 | [javascript](./002LinkedList/circleLinkedList-mxx.js) | LinkedList
双向链表，支持增删操作| [javascript](./002LinkedList/doubleLinkedList-mxx.js) | LinkedList
[Reverse Linked List II - Medium](https://leetcode.com/problems/reverse-linked-list-ii/)| [javascript](./002LinkedList/reverseBetween-opt1-mxx.js) |  LinkedList
[Merge Two Sorted Lists - Easy](https://leetcode.com/problems/merge-two-sorted-lists/)| [javascript](./002LinkedList/mergeTwoLists-opt1-mxx.js) | LinkedList
[Middle of the Linked List - Easy](https://leetcode.com/problems/middle-of-the-linked-list/)| [javascript](./002LinkedList/middleNode-opt1-mxx.js) | LinkedList
[Middle of the Linked List - Easy](https://leetcode.com/problems/middle-of-the-linked-list/)| [javascript](./002LinkedList/middleNode-opt1-mxx.js) | LinkedList
[Add Two Numbers - Medium](https://leetcode.com/problems/add-two-numbers/)| [javascript](./002LinkedList/addTwoNumbers-opt1-mxx.js) | LinkedList
[Linked List Cycle - Easy](https://leetcode.com/problems/linked-list-cycle/) | 未完成 | LinkedList
[LRU Cache - Hard](https://leetcode.com/problems/lru-cache/)| [javascript](./002LinkedList/mxx-lru.js) | LinkedList
[K Closest Points to Origin - Medium](https://leetcode.com/problems/k-closest-points-to-origin/) | [javascript](./005Sort-1/kCloset-mxx.js) | | Sort
[H-index - Medium](https://leetcode.com/problems/h-index/)| [javascript](./005Sort-1/hIndex-mxx.js) | | Sort
[Insertion Sort List - Medium](https://leetcode.com/problems/insertion-sort-list/) | [javascript](./005Sort-1/insertSort-mxx.js) | | Sort
[Wiggle Sort II - Medium](https://leetcode.com/problems/wiggle-sort-ii/) | [javascript](./006Sort-2/wiggleSort-mxx.js) | | Sort
[Pancake Sorting - Medium](https://leetcode.com/problems/pancake-sorting/) | [javascript](./006Sort-2/pancakeSort-mxx.js) | | Sort
[LRU Cache - Hard](https://leetcode.com/problems/lru-cache/) |[javascript](./008HashMap/LRUCache-opt-mxx.js) | HashMap | 
[Longest Substring Without Repeating Characters - Medium](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | [javascript](./009String/lengthOfLongestSubstring-opt1-mxx.js) | |  | String
[Longest Common Prefix - Easy](https://leetcode.com/problems/longest-common-prefix/) | [javascript](./009String/longestCommonPrefix-opt1-mxx.js) | |  | String
实现一个字符集，只包含a～z这26个英文字母的Trie树 | [javascript](./009String/trie-mxx-搜索提示.js) | |  | String
实现朴素的字符串匹配算法|[javascript](./009String/bf-朴素字符串匹配-mxx.js)|||String
[Same Tree - Easy](https://leetcode.com/problems/same-tree/) | [javascript](./010Tree/sameTree-mxx.js)  | Tree | |
[Binary Tree Level Order Traversal - Medium](https://leetcode.com/problems/binary-tree-level-order-traversal/) | [javascript](./010Tree/levelOrder-opt1-mxx.js)  | Tree | |
[Maximum Width of Binary Tree - Medium](https://leetcode.com/problems/maximum-width-of-binary-tree/) | [javascript](./010Tree/widthOfBinaryTree-opt1-mxx.js)  | Tree | |
[Lowest Common Ancestor of a Binary Tree - Medium]Z(https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | [javascript](./010Tree/lowestCommonAncestor-opt1-mxx.js)  | Tree | |
[Binary Tree Zigzag Level Order Traversal - Medium](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) | [javascript](./010Tree/zigzagLevelOrder-mxx.js.js)  | Tree | |
实现一个二叉查找树，并且支持插入、删除、查找操作 | [javascript](./010Tree/binarySearchTree-mxx.js) |Tree||
实现查找二叉查找树中某个节点的后继、前驱节点 | [javascript](./010Tree/findPreAndNextNodeInBST-mxx.js) |Tree||
实现二叉树(深度优先)前、中、后序以及(宽度)按层遍历 | [javascript](./010Tree/binarySearchTree-mxx.js) |Tree||
