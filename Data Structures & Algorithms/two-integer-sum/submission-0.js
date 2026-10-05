class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diffMap = new Map();

        for (let i=0; i < nums.length; i++){
            if(diffMap.has(nums[i])) {
                return [diffMap.get(nums[i]),i];
            }
            const diff = target-nums[i];
            diffMap.set(diff, i);
        }

        return [];
    }
}
