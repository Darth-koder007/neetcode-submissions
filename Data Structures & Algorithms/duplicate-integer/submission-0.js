class Solution {

    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numMap = new Set();
        for (const num of nums ){
            if (numMap.has(num)){
                return true;
            }
            numMap.add(num);
        }

        return false;
    }
}
