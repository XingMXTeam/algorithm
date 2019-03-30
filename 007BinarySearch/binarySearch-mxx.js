// 用循环实现。前提是无重复元素
const binarySearch = function(arr, k) {
	if(arr.length<=1) return;
	let low = 0;
	let high = arr.length - 1;
	while(low<=high) {
		let mid = low + Math.floor((high-low)>>1);
		if(arr[mid]==k) {
			return mid;
		}else if(arr[mid]>k) {
			high = mid -1;
		}else {
			low = mid + 1;
		}
	}
	return -1;
}