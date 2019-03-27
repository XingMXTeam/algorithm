/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 折半，然后在已排好序的数组里找目标值，另一半继续折半，在已排好序的数组里找
    var searchInArr = function(arr, start, end, ta) {
        if(start>end) return -1;
        var mid = Math.floor((end+start)/2);
        if(arr[mid]<ta) {
            return searchInArr(arr, mid+1, end, ta);
        }
        else if(arr[mid]>ta) {
            return searchInArr(arr, start, mid-1, ta)
        }
        return mid;
    }
    
    var doLoopCheck = function(nums, start, end) {
    	if(start>end) return -1;
        var mid = Math.floor((end+start)/2);
        // 左边已经排好序
        if(nums[start]<=nums[mid]) {
            var result = searchInArr(nums, start, mid, target);
            if(result==-1) {
                return doLoopCheck(nums, mid+1, end);
            } else {
                return result;
            }
        }else {
            var result = searchInArr(nums, mid, end, target);
            if(result==-1) {
                return doLoopCheck(nums, start, mid-1);
            } else {
                return result;
            }
        }
    }
    return doLoopCheck(nums,0,nums.length-1);
};