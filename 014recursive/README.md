# 014 Recursive

## Content

电影院坐第几排的问题。去的过程叫“递”，回来的过程叫“归”。
基本上，所有的递归问题都可以用递推公式来表示。

什么样的问题可以用递归解决
1 一个问题可以分解为子问题的解
2 问题和子问题的求解思路一样
3 存在递归终止条件

这里有 n 个台阶，每次你可以跨 1 个台阶或者 2 个台阶，
请问走这 n 个台阶有多少种走法？
怎么写递归代码：
写递归公式，然后写递归结束条件

理解递归代码只需要假设子问题已经解决，然后弄清楚A和B\C\D等子问题的关系（也就是递归公式）。
而不要一层层递归进去把自己绕晕。

警惕堆栈溢出（系统崩溃，后果比较严重）：
比如前面的讲到的电影院的例子，如果我们将系统栈或者 JVM 堆栈大小设置为 1KB，在求解 f(19999) 时便会出现如下堆栈报错：
解决办法是限制递归深度。如果递归深度太大，就用栈实现。

死循环问题：检测环的存在（
构造一个set集合或者散列表，每次获取到上层推荐人就去散列表里查。每次查询都是自己的散列表，不能共用
）

重复计算问题：
为了避免重复计算，我们可以通过一个数据结构（比如散列表）来保存已经求解过的 f(k)。当递归调用到 f(k) 时，先看下是否已经求解过了。如果是，则直接从散列表中取值返回，不需要重复计算，这样就能避免刚讲的问题了。

时间成本和空间成本

调试递归：
1 打印日志发现递归值
2 结合条件断点进行调试

## Question

1. 这里有 n 个台阶，每次你可以跨 1 个台阶或者 2 个台阶，
请问走这 n 个台阶有多少种走法？
本质上就是斐波那契数列

2. 电影院问题 空间复杂度是O(n)

3. 寻找最终推荐人


