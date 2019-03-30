/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return find(nums, 0, nums.length-1, k);
};

var find = function(nums, start, end, k) {
    if(start>end) return -1;//注意点1: 不能取等号 凡是查找的等于情况一般都需要进来。
    let mid = partition(nums, start, end);
    if(mid+1==k) {
        return nums[mid];
    }else if(k>mid+1) {
        return find(nums, mid+1, end, k);
    }else{
        return find(nums, start, mid-1, k);
    }
};

var partition = function(nums, start, end) {
  let mid = nums[end];  
  let i = start;
  for(let j=start;j<end;j++) {
      if(nums[j]>mid) {// 注意点2： 从大到小排序 因为是第K大
          let tmp = nums[i];
          nums[i] = nums[j];
          nums[j] = tmp;
          i++;
      }
  }
  let tmp = nums[i]; 
  nums[i] = nums[end];
  nums[end] = tmp;
  return i;  
};