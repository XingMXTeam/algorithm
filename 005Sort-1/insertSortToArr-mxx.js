const insertSortToArr = function(arr) {
	if(arr.length<=1) return;

	// 遍历未排序的元素
	for(let i=1;i<arr.length;i++) {
		let value = arr[i];//必须先保存起来，因为每次比较后，可能往后移动覆盖了原值
		let j=i-1;//必须放这里，放在for括号里面访问不到
		// 查找插入的位置
		for(;j>=0;j--) {
			// 只要已排序大于未排序，则移动
			if(arr[j]>value) {
				arr[j+1] = arr[j];
			}
			// 找到要插入的位置，结束循环
			else{
				break;
			}
		}
		arr[j+1]=value;
	}		
}