/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // brute force
    // let maxProfit = 0;
    // for (let i = 0; i < prices.length - 1; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         if ((prices[j] - prices[i]) > 0 && maxProfit < (prices[j] - prices[i])) {
    //             maxProfit = prices[j] - prices[i];
    //         }
    //     }
    // }
    // return maxProfit;
    
    let maxProfit = 0;
    
    let purchaseDay = 0;
    let sellDay = 1
    
    while (sellDay < prices.length) {
        if (prices[sellDay] > prices[purchaseDay]) {
            profit = prices[sellDay] - prices[purchaseDay];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            purchaseDay = sellDay;
        }
        sellDay++;
    }
    return maxProfit;
};