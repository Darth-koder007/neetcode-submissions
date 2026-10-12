class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowArr = Array.from({ length: 9 }, () => new Set());
        const columnArr = Array.from({ length: 9 }, () => new Set());
        const boxArr = Array.from({ length: 9 }, () => new Set());

        for (let row = 0; row < board.length; row++) {
            // 1. insert item in rowMap while keep checking if its duplicate [1...9]
            for (let col = 0; col < board[row].length; col++) {
                const item = board[row][col];
                if (!isNaN(item)) {
                    if (rowArr[row].has(item) || columnArr[col].has(item)) {
                        return false;
                    }
                    rowArr[row].add(item);
                    // 2. insert item in column map while keep checking for duplicate [1...9]
                    columnArr[col].add(item);
                    // 3. insert item from row and column in a fashion that they or follwing 3x3 matrix [1...9]
                    const boxNumber = Math.floor(row / 3) * 3 + Math.floor(col / 3);
                    if (boxArr[boxNumber].has(item)) {
                        return false;
                    }
                    boxArr[boxNumber].add(item);
                }
            }
        }

        return true;
    }
}
