const stepsCal = function(n) {
	if(n==1){
		return 1;
	}
	if(n==2) {
		return 2;
	}
	return stepsCal(n-1)+stepsCal(n-2);
}