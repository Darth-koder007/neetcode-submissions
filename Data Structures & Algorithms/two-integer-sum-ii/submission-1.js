class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0;
        let end = numbers.length - 1;

        while (start < end) {
            const num =numbers[start] + numbers[end];
            if (num < target) {
                start++;
            } else if (num > target) {
                end--;
            } else  {
                return [start + 1, end + 1];
            }
        }

        return [];
    }
}
