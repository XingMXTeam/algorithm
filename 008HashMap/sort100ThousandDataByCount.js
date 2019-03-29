//10万条URL访问日志，如何按照访问次数给URL排序。
const sort100ThousandDataByCount = function() {
	// 读取文件，获得url和每个url的访问次数
	// 然后用hashtable保存起来
	let map = {};
	// map[url] = count;
	// 记录访问次数的最大值K
	// 如果k不是很大，用桶排序O(n)。否则用快速排序O(nlogn)。
}