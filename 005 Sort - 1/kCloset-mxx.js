/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    var pointArr = [];
    var valueArr = [];
    points.forEach(function(point){
        var a = Math.abs(point[0]), b = Math.abs(point[1]);
        var distance = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
		
		// insert sort
        if(valueArr.length<=0) {
			pointArr.push(point);
			valueArr.push(distance);
			return;
		}
		valueArr.some(function(i, index) {
		   // 如果更小， 则往前插入
		   if(i>distance) {
		       // 修改了遍历的数组
			   valueArr.splice(index, 0, distance);
			   pointArr.splice(index, 0, point);
			   // 直接结束循环
			   return true;
		   }
		   // 比所有的都大
		   else if(index+1==valueArr.length) {
		   	   valueArr.push(distance);	
			   pointArr.push(point);
			   return true;
		   } 
		   return false;
		});
    });
    // 找出所有值
	var result=[];
	for(var i=0;i<K;i++) {
		result.push(pointArr[i]);
	}
	return result;
};