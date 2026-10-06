class Solution {
    makeKey(word) {
        const alphabet = new Array(26).fill(0);
        for (const letter of word) {
            alphabet[letter.charCodeAt(0) - "a".charCodeAt(0)]++;
        }

        return alphabet.join(",");
    }
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};

        for (let i = 0; i < strs.length; i++) {
            const currentStr = this.makeKey(strs[i]);
            if (result[currentStr]) {
                result[currentStr].push(strs[i]);
            } else {
                result[currentStr] = [strs[i]];
            }
        }

        return Object.values(result);
    }
}
