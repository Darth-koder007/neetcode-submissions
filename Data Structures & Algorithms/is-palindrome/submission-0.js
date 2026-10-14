class Solution {
    isAlphaNum(str) {
        return /[a-zA-Z0-9]/.test(str);
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.split("");
        let start = 0;
        let end = str.length - 1;

        while (start < end) {
            while (start < end && !this.isAlphaNum(str[start])) {
                start++;
            }
            while (start < end && !this.isAlphaNum(str[end])) {
                end--;
            }

            if (str[start].toLowerCase() !== str[end].toLowerCase()) {
                return false;
            }

            start++;
            end--;
        }

        return true;
    }
}
