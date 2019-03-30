const quickSort = function(arr, start, end) {
	if(start>=end) return;
	if(arr.length<=1) return;
	let q = partition(arr, start, end);
	// 注意这里是q-1 表示左边的排序
	quickSort(arr, start, q-1);
	quickSort(arr, q+1, end);
}

const partition = function(arr, start, end) {
	let qivot = arr[end];
	let i=start;//指向顺位第一个大于mid的数
	for(let j=start;j<end;j++) {
		if(arr[j]<qivot) {
			let tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
		}
	}
	let tmp = arr[i];
	arr[i] = arr[end];
	arr[end] = tmp;
	return i;
}