class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const encodedStrs = [];
        for (const str of strs) {
            if (str.length > 0) {
                const chars = str.split("");
                const encodedChars = [];

                for (const char of chars) {
                    encodedChars.push(char.charCodeAt());
                }

                encodedStrs.push(encodedChars.join("%"));
            } else {
                encodedStrs.push(str);
            }
        }
        return strs.length + "#" + encodedStrs.join("|");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.startsWith("0#")) return [];
        
        const decodedStrs = str.slice(str.indexOf("#") + 1).split("|");
        const finalDecodedStr = [];

        for (const str of decodedStrs) {
            if (str.length > 0) {
                const chars = str.split("%");
                const decodedChars = [];

                if (chars.length > 0) {
                    for (const char of chars) {
                        decodedChars.push(String.fromCharCode(char));
                    }
                }
                finalDecodedStr.push(decodedChars.join(""));
            } else {
                finalDecodedStr.push(str);
            }
        }

        return finalDecodedStr;
    }
}
