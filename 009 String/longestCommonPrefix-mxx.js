/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 遍历第一个字符串的每个字串，然后判断是否其他字符串也有这个子串
    if(strs.length<=0) return "";
    if(strs.length==1) return strs[0];
    var str = strs[0], lastSubStr="";
    for(var len=1;len<=str.length;len++) {
        var substr = str.substr(0, len);
        // 判断其他的字符串是否也有
        var has = true;
        for(var i=1;i<strs.length;i++) {
          var otherStr = strs[i];
          if(!new RegExp("^"+substr).test(otherStr)) {
              has = false;
              break;
          }  
        }
        if(has) {
          lastSubStr = substr;
        }
    }
    return lastSubStr;
};