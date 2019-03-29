let hasCal = [];
// 避免重复计算
const stepsCal = function(n) {
	if(n==1){
		return 1;
	}
	if(n==2) {
		return 2;
	}
	if(hasCal[n]) {
		return hasCal[n];
	}
	let ret = f(n-1)+f(n-2);
	hasCal[n] = ret;
	return ret;
}