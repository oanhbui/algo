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

#Using Map()
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i in range(0, len(nums)):
            if (target - nums[i]) in seen:
                return [seen[target - nums[i]], i]
            seen[nums[i]] = i