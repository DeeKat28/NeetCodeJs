/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
//     let maxAmount = 0;
    
//     for (let i = 0; i < height.length-1; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             let amount = (j - i) * Math.min(height[i], height[j]);
//             maxAmount = Math.max(maxAmount, amount);
//         }
//     }
//     return maxAmount;
    
//     let maxAmount = 0;
    
//     let left = 0;
//     let right = height.length - 1;
    
//     while (left < right) {
//         let amount = (right - left) * Math.min(height[left], height[right]);
//         maxAmount = Math.max(maxAmount, amount);
        
//         if (height[left] < height[right]) {
//             left++;
//         }
//         else if (height[right] < height[left]) {
//             right--;
//         }
//         else {
//             if (height[left + 1] > height[right-1]) {
//                 left++;
//             }
//             else {
//                 right--;
//             }
//         }
//     }
//     return maxAmount;
    
    let maxAmount = 0;
    
    let left = 0;
    let right = height.length - 1;
    let amount = 0;
    
    while (left < right) {
        
        if (height[left] < height[right]) {
            amount = (right - left) * height[left];
            left++;
        }
        else if (height[right] < height[left]) {
            amount = (right - left) * height[right];
            right--;
        }
        else {
            amount = (right - left) * height[left];
            if (height[left + 1] > height[right-1]) {
                left++;
            }
            else {
                right--;
            }
        }
        maxAmount = Math.max(maxAmount, amount);
    }
    return maxAmount;
};