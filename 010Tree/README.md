# 004 Tree - 1

## Content

Tree - 1

树的概念中，只有层是从1开始的，而且根是第一层。

满二叉树：每个节点都有左右节点。
完全二叉树：最后一层叶子节点都靠左，其他层都满。
二叉排序(查找)树：(因为中序遍历可以输出有序的序列)
在二叉查找树中存储的，是一个包含很多字段的对象。我们利用对象的某个字段作为键值（key
来构建二叉查找树。我们把对象中的其他字段叫作卫星数据。插入、删除、查找和树的高度有关系，也就是O(logn)。
但也可能是O(n)。平衡二叉查找树稳定的O(logn)。

如何处理重复数据？当有重复数据时如何一次性删除？

链式存储；数组存储（第一个节点为空）

树的时间复杂度和深度有关系还是节点个数？
二叉树遍历的时间复杂度和节点相关。也就是O(n)。
插入、删除、查找和树的高度有关系，也就是O(logn)。根节点高度=max(左子树高度，右子树高度)+1、层次遍历

快速地查找最大节点和最小节点、前驱节点和后继节点


## Question

1. [Same Tree - Easy](https://leetcode.com/problems/same-tree/)

2. [Binary Tree Level Order Traversal - Medium](https://leetcode.com/problems/binary-tree-level-order-traversal/)

3. [Maximum Width of Binary Tree - Medium](https://leetcode.com/problems/maximum-width-of-binary-tree/)

4. 实现一个二叉查找树，并且支持插入、删除、查找操作

5. 实现查找二叉查找树中某个节点的后继、前驱节点

6. 实现二叉树(深度优先)前、中、后序以及(宽度)按层遍历

7. [Lowest Common Ancestor of a Binary Tree - Medium]Z(https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

8. [Binary Tree Zigzag Level Order Traversal - Medium](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

9. 1，3，5，6，9，10。你来算算，可以构建出多少种不同的二叉树。
n! 相当于数组的排列组合有多少种