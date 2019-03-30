// 用递归实现
const binarySearch = function(arr, start, end, k) {
	if(start>end) return;
	let mid = start + Math.floor((end-start)>>1);
	if(arr[mid]==k) return mid;
	else if(arr[mid]>k) {
		return binarySearch(arr, start, mid-1,k);
	}
	else {
		return binarySearch(arr, mid+1, end,k);
	}
}