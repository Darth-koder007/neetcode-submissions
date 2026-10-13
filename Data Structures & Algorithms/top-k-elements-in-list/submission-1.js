class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = new Map();
        const fqMap = new Map();
        let largestFq = 0;
        const result = [];

        for (const num of nums) {
            numsMap.set(num, (numsMap.get(num) || 0) + 1);
        }

        for (const [num, vals] of numsMap) {
            const fqKey = vals;
            const fqMapVal = fqMap.get(fqKey) || new Set();
            fqMapVal.add(num);
            fqMap.set(fqKey, fqMapVal);

            largestFq = Math.max(largestFq, vals);
        }

        for (let i = largestFq; i > 0; i--) {
            if (fqMap.has(i)) {
                result.push(...fqMap.get(i));
            }
            if (result.length === k) {
                return result;
            }
        }

        return [];
    }
}
