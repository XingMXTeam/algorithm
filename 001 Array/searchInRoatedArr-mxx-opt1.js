/**
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   // 不一定要把已排序和未排序的分开。已排序的也可以当做为排序的处理。
   var searchIn = function(arr, start, end, target) {
      // 递归出口
      if(start>end) return -1;
      var mid = Math.floor(start + (end-start)/2);
      // 递归出口
      if(arr[mid]==target) return mid;
      // 左边是排好序的
      if(arr[start]<=arr[mid]) {
        // 说明在左边已排好序的里面
        if(target>=arr[start] && target<=arr[mid]) {
            return searchIn(arr, start, mid, target);
        }
        // 在未排好序的里面查找
        return searchIn(arr, mid+1, end, target)
      }
      // 右边是排好序的
      else {
          //判断要找的值是否在右边
          if(target>=arr[mid] && target<=arr[end]) {
            return searchIn(arr, mid, end, target);
          }
          // 在未排好序的里面查找
          return searchIn(arr, start, mid-1, target);
      }
   }
   return searchIn(nums, 0, nums.length-1, target);
}
