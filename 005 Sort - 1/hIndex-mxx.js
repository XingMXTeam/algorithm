/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if(citations.length<=0) return 0;
    var result = 0;//默认是0
    // 从小到大排序
    var ci = citations.sort(function(a,b) {
        return a-b;
    });
    ci.some(function(item, index){
      //比当前引用多的文章数
      var a = ci.length-index;
      //如果引用数大于比a大，则a为h-index
      if(item>=a){
          result = a;
          return true;
      }
      return false;
    });
    return result;
}; 