/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    var result=0;
    ages = ages.sort(function(a,b) {
        return b-a;
    });
    for(var i=0;i<ages.length;i++) {
        for(var j=i+1;j<ages.length;j++) {
            if(ages[j]<=0.5*ages[i]+7) {
                continue;
            }
            if(ages[i]==ages[j]) {
                result++;
            }
            result++;
        }
    }
    return result;
};