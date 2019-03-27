/**
 * 复杂度为O(n^3) 不适合处理长串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 思路： 取所有子串。找出不存在重复字符的子串。
    if(s.length==1) return 1;
    var result = [];
    
    // 从头开始取
    for(var len=1;len<=s.length;len++) {
        for(var i=0;i<s.length;i++) {
            // 取len长的子串
            // 如果超出长度，则不取
            if(i+len>s.length) break;
            var subs = s.substr(i, len);
            // 检测子串是否有重复字符
            var visitedMap = [], isRepeat = false;
            for(var j=0;j<subs.length;j++) {
                if(visitedMap.indexOf(subs[j])==-1) {
                    visitedMap.push(subs[j]);
                }else {
                    isRepeat = true;
                    break;
                }
            }
            // 如果不重复，则保存
            if(!isRepeat) {
                result.push(subs);
            }
        }
    }
    return result.length>0?result[result.length-1].length:0;
};