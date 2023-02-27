#https://leetcode.com/problems/two-sum/description/


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        sorted_nums = sorted((num, i) for i, num in enumerate(nums))
        l = 0
        r = len(nums) - 1
        while l < r:
            if sorted_nums[l][0] + sorted_nums[r][0] > target:
                r -= 1
            elif sorted_nums[l][0] + sorted_nums[r][0] < target:
                l += 1
            else:
                return [sorted_nums[l][1], sorted_nums[r][1]]
                
        return [-1, -1]