
var RecentCounter = function() {
    this.stack = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.stack.push(t);
    let result = [];
    if(this.stack.length<=0) {
        return [t];
    }
    let lowerBound = t-3000>0?(t-3000):0;
    let upperBound = t;
    let curr;
    for(let i=0;i<this.stack.length;i++) {
        curr = this.stack[i];
        if(!curr) {
            result.push(null);
        }
        else if(curr>=lowerBound&&curr<=upperBound) {
            result.push(curr);
        }
    }
    return result.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */