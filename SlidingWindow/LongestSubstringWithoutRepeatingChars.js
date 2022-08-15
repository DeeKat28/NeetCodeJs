/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    // Brute Force O(n^3)
    // function checkDuplicate(s, i, j) {
    //     const uniqueChars = new Array(256).fill(false);
    //     for (let k = i; k <= j; k++) {
    //         if (uniqueChars[s.charCodeAt(k)]) {
    //             return true;
    //         }
    //         uniqueChars[s.charCodeAt(k)] = true;
    //     }
    //     return false;
    // }
    // let res = 0;
    // for (let i = 0; i < s.length; i++) {
    //     for (let j = i; j < s.length; j++) {
    //         if (!checkDuplicate(s, i, j)) {
    //             res = Math.max(res, j - i + 1);
    //         }
    //     }
    // }
    // return res;
    
    // Brute Force O(n^2)
    // let res = 0;
    // for (let  i = 0; i < s.length; i++) {
    //     const validChars = new Array(256).fill(false);
    //     for (let j = i; j < s.length; j++) {
    //         if (validChars[s.charCodeAt(j)]) {
    //             break;
    //         }
    //         validChars[s.charCodeAt(j)] = true;
    //         res = Math.max(res, j - i + 1);
    //     }
    // }
    // return res;
    
    // O(n)
    let res = 0;
    const prev = new Array(256).fill(-1);
    let start = 0;
    
    for (let end = 0; end < s.length; end++) {
        start = Math.max(start, prev[s.charCodeAt(end)] + 1);
        res = Math.max(res, end - start + 1);
        prev[s.charCodeAt(end)] = end;
    }
    return res;
    
    // O(n)
    // let l = 0;
    // let res = 0;
    // let charSet = new Set();
    // for (let r = 0; r < s.length; r++) {
    //     while (charSet.has(s[r])) {
    //         charSet.delete(s[l]);
    //         l++;
    //     }
    //     charSet.add(s[r]);
    //     res = Math.max(res, r-l+1);
    // }
    // return res;
};