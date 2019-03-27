/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
    //思路： 先将最大的放到顶部，然后整个翻转。对余下的进行类似操作
    //k不一定是数组的值
    var result = [];
    
    // 循环处理每一个最大数
    var j=0;
    var B = A;
    while(j<A.length-1) {
        // 剩下的里面找到最大数
        var maxIndex=0, max=A[0];
        for(var i=0;i<A.length-j;i++) {
            if(A[i]>max) {
                maxIndex = i;
                max = A[i];
            }
        }
        // 把最大数放到头部
        if(maxIndex!=0) {
            B = A.slice(0, maxIndex+1).reverse();
            // 生成新的数组
            A = B.concat(A.slice(maxIndex+1));
            // 保存翻转个数k
            result.push(maxIndex+1);
        }
        
        // 排好一个
        B = A.slice(0, A.length-j).reverse();
        // 生成新的数组
        A = B.concat(A.slice(A.length-j));
        // 保存翻转个数k
        result.push(A.length-j);
        j++;
    }  
    return result;
};