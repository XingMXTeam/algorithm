const bubbleSort  = function(arr) {
	if(arr.length==1) return;
	
	for(let i=0;i<arr.length;i++) {
		let hasSwap = false;
		for(let j=i+1;j<arr.length;j++) {
			if(arr[i]>arr[j]) {
				let temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
				hasSwap = true;
			}
		}
		if(!hasSwap) break;
	}
}