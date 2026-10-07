class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numFqMap = new Map();

        for (const num of nums) {
            numFqMap.set(num, (numFqMap.get(num) || 0) + 1);
        }

        const buckets = [];

        for (let i = 0; i <= nums.length; i++) {
            buckets.push([]);
        }
        for (const [num, freq] of numFqMap) {
            buckets[freq].push(num);
        }

        const result = [];
        for (let freq = buckets.length - 1; freq > 0; freq--) {
            for(const num of buckets[freq]){
                result.push(num);

                if(result.length ==k) return result
            }
        }
    }
}
