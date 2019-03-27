//插入排序

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    points.map((item,index,list) => {
        let var1 = Math.abs(item[0])**2;
        let var2 = Math.abs(item[1])**2;
        list[index].value = var1+var2;
    });
    for (let i = 1;i<points.length;i++) {
        let temp = points[i];
        let j = i - 1;
        for (;j >= 0; j--) {
            if (points[j].value > temp.value) {
                points[j+1] = points[j];
            } else {
                break;
            }
        }
        points[j+1] = temp;
    }
    return points.slice(0,K);
};