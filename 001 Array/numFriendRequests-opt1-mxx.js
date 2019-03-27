/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
	// 根据条件分析：A必须大于15岁，B在区间[0.5A+7,A]。
	// 第三个条件无效
	// 只要求出在这

    let result=0;

    // 统计次数
    let map = {}, sumMap ={};
    for(let age of ages) {
    	if(!map[age]) {
    		map[age] = 1;
    	}else{
    		map[age]++;
    	}
    }

    for(let i=1;i<121;i++) {
    	if(!sumMap[i-1]) sumMap[i-1] = 0;//初始化初值
    	if(!map[i]) map[i] = 0;//初始化初值
    	sumMap[i] = map[i] + sumMap[i-1];//累加个数
    }

    for(let ageA=15;ageA<121;ageA++) {
    	if(!map[ageA]) continue;
    	// 年龄B区间的个数
    	let count = sumMap[ageA] - sumMap[Math.floor(ageA*0.5+7)];
    	// 相乘再减去自己和自己的个数
    	result += count*map[ageA] - map[ageA];
    }
    return result;
};