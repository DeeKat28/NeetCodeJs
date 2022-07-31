/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    if (s.length == 0)
        return true;
    
    let start = 0;
    let end = s.length - 1;
    while (start < end) 
    {
	console.log(start);
	console.log(end);
        while (!isAlphaNum(s[start])) {
            ++start;
        }
        while (!isAlphaNum(s[end])) {
            --end;
        }
        
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
    
//     s = s.toLowerCase();
//     s = s.replace(/[^a-z0-9]/g, '');
    
//     for (let i = 0; i < (s.length - 1)/2; i++) {
//         if (s[i] !== s[s.length-1-i])
//             return false;
//     }
//     return true;
    
};

    let isAlphaNum = (c) => {
	console.log(c);
        if (
		(c >= 48 && c <= 57)
		||
		(c >= 65 && c <= 90)
		||
		(c >= 97 && c <= 122)
	)
 	{
            return true;
        }
        else {
            return false;
    }
}

isPalindrome("race a car");