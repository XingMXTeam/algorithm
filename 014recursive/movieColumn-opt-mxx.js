// n表示总共多少排
// 非递归写法
const movieColumn = function(n) {
	if(n==1) return 1;
	let ret = 1;
	for(let i=2;i<=n;i++) {
		ret = ret+1;
	}
	return ret;
}