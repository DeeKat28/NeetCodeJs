/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
//     let arr1 = s.split('');
//     let arr2 = t.split('');
//     arr1.sort();
//     arr2.sort();
    
//     return arr1.join('') === arr2.join('');
    
    if (s.length !== t.length)
        return false;
    
    let hashMap1 = {};
    let hashMap2 = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in hashMap1)) {
            hashMap1[s[i]] = 1;
        } else {
            hashMap1[s[i]] = hashMap1[s[i]] + 1;
        }
        if (!(t[i] in hashMap2)) {
            hashMap2[t[i]] = 1;
        } else {
            hashMap2[t[i]] = hashMap2[t[i]] + 1;
        }
    }
    
    for (let key in hashMap1) {
        if (hashMap1[key] !== hashMap2[key])
            return false;
    }
    return true;
};