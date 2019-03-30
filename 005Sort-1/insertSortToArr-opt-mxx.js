const insertSortToArr = function(arr) {
	if(arr.length<=1) return;
	// 增加一个哨兵位置
	arr.unshift(null);

	// 遍历未排序的元素
	for(let i=2;i<arr.length;i++) {
		arr[0] = arr[i];//必须先保存起来，因为每次比较后，可能往后移动覆盖了原值
		let j=i-1;//必须放这里，放在for括号里面访问不到
		// 查找插入的位置
		for(;arr[j]>arr[0];j--) {
			arr[j+1] = arr[j];
		}
		arr[j+1]=arr[0];
	}
	
	// 移出哨兵
	arr.shift();		
}