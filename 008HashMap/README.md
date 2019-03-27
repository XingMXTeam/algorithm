# 008 HashMap

## Content

HashMap

## Concept

运动员编号->映射到运动员(编号可能直接映射不到运动员，可能还需要姓名+编号) 编号就是key。映射关系就是Hash Function，函数返回的值叫散列值/哈希值。

不同的key，可能得到是同一个散列值。也就是散列冲突。
开放寻址法：线性探测，二次探测，双重散列
链表法

装载因子 = 表中的元素个数/长度

常见哈希算法：MD5 SHA CRC

## Question

1. [LRU Cache - Hard](https://leetcode.com/problems/lru-cache/)

2. Word文档中的单词拼写检查

3. 10万条URL访问日志，如何按照访问次数给URL排序。

4. 有两个字符串数组，每个数组大约有 10 万条字符串，如何快速找出两个数组中相同的字符串？