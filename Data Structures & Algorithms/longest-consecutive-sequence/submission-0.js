class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const allNums = new Set(nums);
        let longestSeq = 0;

        for (const num of allNums) {
            let currentSeq = 0;
            let currentSeqNum = num;
            if (!allNums.has(num - 1)) {
                while (allNums.has(currentSeqNum)) {
                    currentSeqNum++;
                    currentSeq++;
                }
            }

            if (currentSeq > longestSeq) {
                longestSeq = currentSeq;
            }
        }

        return longestSeq;
    }
}
