/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   // 思路：从左到右扫描，如果字符不在已访问内或者不在当前窗口内，则当前长度+1；
   // 如果在的话，更新当前长度和最大长度
    
    var curLen=0, maxLen=0, map={};
    for(var i=0;i<s.length;i++) {
       var curChar = s[i];
       var prevIndex = map[curChar];
       // 如果不在已访问或者不在当前窗口内(当前索引减去之前索引的长度大于窗口长度说明不在窗口内)
       if(prevIndex==undefined||i-prevIndex>curLen) {
         curLen++;   
       }else{
       	 // 修改curLen前需要更新最大长度
         if(curLen>maxLen) {
             maxLen = curLen;
         }
         // 更新当前窗口宽度
         curLen = i - prevIndex;
       }
       map[curChar] = i; 
    }
    if(curLen>maxLen) {
        maxLen = curLen;
    }
    return maxLen;
};