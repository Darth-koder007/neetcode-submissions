class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < sortedNums.length; i++) {
            if (i === 0 || sortedNums[i] !== sortedNums[i - 1]) {
                const target = sortedNums[i];
                let start = i + 1;
                let end = sortedNums.length - 1;

                while (start < end) {
                    let startNum = sortedNums[start];
                    let endNum = sortedNums[end];

                    if (startNum + endNum < -target) {
                        start++;
                    } else if (startNum + endNum > -target) {
                        end--;
                    } else {
                        result.push([target, startNum, endNum]);
                        start++;
                        end--;
                        while (start < end && nums[start] === nums[start - 1]) {
                            start++;
                        }
                    }
                }
            }
        }

        return result;
    }
}
