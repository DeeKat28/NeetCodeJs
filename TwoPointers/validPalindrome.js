/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    if (s.length == 0)
        return true;
    
    s = s.toLowerCase();
    let start = 0;
    let end = s.length - 1;
    while (start < end) 
    {
        while (start < end &&  
               !(
                    (s.charCodeAt(start) >= 48 && s.charCodeAt(start) <= 57) 
                    || 
                    (s.charCodeAt(start) >= 97 && s.charCodeAt(start) <= 122)
                )
                ) 
        {
            start++;
        }
        while (start < end && 
                !(
                    (s.charCodeAt(end) >= 48 && s.charCodeAt(end) <= 57) 
                    || 
                    (s.charCodeAt(end) >= 97 && s.charCodeAt(end) <= 122)
                )
                ) 
        {
            end--;
        }
        
        if (start < end && s[start] !== s[end]) {
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