/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    // 从小到大排序。然后左右各一半分别倒着取值
    // 返回新的数组对象空间
    var newnums = nums.sort(function(a, b){
        return a-b;
    }).map(function(a){return a});
    var i = 0;
    var mid = Math.ceil(newnums.length/2) - 1;
    var dis = Math.floor(newnums.length/2);
    // 注意包含0
    while(mid>=0) {
        nums[i++] = newnums[mid];
        // 奇数时，跳过
        if(i<nums.length) {
        	nums[i++] = newnums[mid+dis];
        }
        mid--;
    }
};