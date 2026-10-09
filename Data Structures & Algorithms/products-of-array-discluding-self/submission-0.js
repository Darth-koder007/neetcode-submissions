class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const numResult = new Array(nums.length);
        let product;

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                product = 1;
            } else {
                product *= nums[i - 1];
            }
            numResult[i] = product;
        }

        product = 1;

        for (let i = nums.length - 1, j = 0; i >= 0; i--, j++) {
            if (typeof nums[i + 1] === "number") {
                product *= nums[i + 1];
            }
            numResult[i] = numResult[i] * product;
        }

        return numResult;
    }
}
