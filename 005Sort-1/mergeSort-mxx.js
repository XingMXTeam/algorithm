const mergeSort = function(arr, start, end) {
	if(start>=end) return;
	let q = start + Math.floor((end-start)/2);
	mergeSort(arr, start, q);
	mergeSort(arr, q+1, end);
	merge(arr, start, q, end);
}

// 关键是merge方法要写对
const merge = function(arr, p, q, r) {
	let tmp = [];

	let leftArr = arr.slice(p,q+1);
	leftArr.push(Infinity);//添加哨兵。不用额外再处理剩余部分
	let rightArr = arr.slice(q+1);
	rightArr.push(Infinity);

	// 注意这里是当索引都超出时结束
	let i=0;
	let j=0;
	while(i<=leftArr.length-2 || j<=rightArr.length-2) {
	    if(leftArr[i] <= rightArr[j]) {
	        tmp.push(leftArr[i++]);
	    }
	    else{
	        tmp.push(rightArr[j++]);
	    }
	}

	//拷贝tmp到arr。注意arr不一定是从0开始的！！！
	tmp.forEach((item, index)=>{
		arr[p+index] = item;
	});
}