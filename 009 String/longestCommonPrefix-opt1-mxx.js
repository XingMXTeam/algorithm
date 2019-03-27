/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length<=0) return "";
    if(strs.length==1) return strs[0];
    
    // 先找两个字符串的最长公共子串，结果再和第三个字符串找最长公共子串
    var commonPrefixBetweenTwo = function(str1, str2) {
        var result = [];
        for(var i=0;i<str1.length;i++) {
            if(str1[i]!=str2[i]) {
                break;
            }
            result.push(str1[i]);
        }
        return result.join("");
    };
    
    var prefix = strs[0];
    for(var i=1;i<strs.length;i++) {
        prefix = commonPrefixBetweenTwo(prefix, strs[i]); 
    }
    return prefix;
};