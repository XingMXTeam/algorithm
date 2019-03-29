// n表示总共多少排
const movieColumn = function(n) {
	if(n==1) return 1;
	return f(n-1)+1;
}