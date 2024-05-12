// 2733. Neither Minimum nor Maximum

// Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.
// Return the selected integer.




/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    

    nums.sort((a,b) => a-b)

    if(nums.length <= 2){
        return -1
    }
    else{
        return nums[1]
    }
};