#leetcode - medium - increasing triplet subsequences

class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        if len(nums) < 3:
            return False
        minLeft = nums[0]
        maxRight = nums[-1]
        maxRight_by_index = [0] * len(nums) 
        for i in range(len(nums) - 1, -1, -1):
            if nums[i] > maxRight:
                maxRight = nums[i]
            maxRight_by_index[i] = maxRight
        for i in range(len(nums)):
            if nums[i] < minLeft:
                minLeft = nums[i]
            if nums[i] > minLeft and nums[i] < maxRight_by_index[i]:
                return True
        return False    
 