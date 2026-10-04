class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
 isAnagram(s, t) {
        const sMap = {};
        
        if(s.length !== t.length) return false;
        
        for(const l of s) sMap[l] = (sMap[l]?? 0) +1;

    for (const l of t)
    {
        if(!sMap[l]) return false;
        else sMap[l]--;
    }

        
        return true;
    }

}
