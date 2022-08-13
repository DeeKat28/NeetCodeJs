/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
//     let trappedWater = 0;
//     let maxLeft = []
//     let maxRight = [];
//     let minLR = [];
    
//     maxLeft[0] = 0;
//     for (let i = 1; i < height.length; i++) {
//         maxLeft[i] = Math.max(maxLeft[i-1], height[i-1]);
//     }
    
//     maxRight[height.length - 1] = 0;
//     for (let i = height.length - 2; i >= 0; i--) {
//         maxRight[i] = Math.max(maxRight[i+1], height[i+1]);
//     }
    
//     for (let i = 0; i < height.length; i++) {
//         minLR[i] = Math.min(maxLeft[i], maxRight[i]);
//         let amount = minLR[i] - height[i];
//         if (amount > 0) {
//             trappedWater += amount;
//         }
//     }
    
//     return trappedWater;
    
    if (!height || height.length == 0) {
        return 0;
    }
    
    let L = 0;
    let R = height.length - 1;
    let maxLeft = height[L];
    let maxRight = height[R];
    let trappedWater = 0;
    
    while (L < R) {
        
        if (maxLeft < maxRight) {
            L++;
            maxLeft = Math.max(maxLeft, height[L]);
            trappedWater += maxLeft - height[L];
        }
        else {
            R--;
            maxRight = Math.max(maxRight, height[R]);
            trappedWater += maxRight - height[R];
        }
        
    }
    return trappedWater;
};