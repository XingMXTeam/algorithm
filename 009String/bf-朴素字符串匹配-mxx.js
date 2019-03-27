/*
BF算法： 朴素字符串匹配
*/
function bf(str, pattern) {
	// 每次移动一位模式串。逐个匹配。如果有不匹配的，则继续下一个。若快到结尾了，直接结束循环。
	if(!str||!pattern) return false;
	if(str.length<pattern.length) return false;

	var j=0, result = [], lastMatchIndex;
	for(var i=0;i<str.length;) {
		// 不匹配。模式串从头开始。主串匹配下一个。
		if(pattern[j]!=str[i]) {
			j = 0;
			i = i-j+1;
			// i不用移动到最后
			if(str.length-i<pattern.length) {
				break;
			}
			continue;
		}
		else {
			// 完全匹配,保存匹配的位置。并且重置j
			if(j==pattern.length-1) {
				result.push(i-pattern.length+1);
				j=0;
				i = i-j+1;
				// i不用移动到最后
				if(str.length-i<pattern.length) {
					break;
				}
			}
			// 匹配下一个
			else {
				j++;
				i++;
			}
		}
	}
	return result.length>0?result:false;
}

// 思路清晰多了。Fxck。
function bf2(str, pattern) {
	var result = [];
	// 移动索引
	for(var i=0; i<=str.length-pattern.length;i++) {
		var j;
		for(j=0;j<pattern.length;j++) {
			// 直接计算索引
			if(str[i+j]!=pattern[j]){
				break;
			}
		}
		if(j==pattern.length) {
			result.push(i);
		}
	}
	return result;
}


bf2("AABAACAADAABAABA", "AABA");