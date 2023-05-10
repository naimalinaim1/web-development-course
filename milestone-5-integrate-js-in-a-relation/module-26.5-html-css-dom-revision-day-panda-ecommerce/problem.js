/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let first = nums[i];
        for (let j = 1; j < nums.length; j++) {
            let last = nums[j];
            if (first + last == target && i != j) {
                return [i, j];
            }
        }
    }
};
