# https://leetcode.com/problems/missing-number/description


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        seen = set(nums)
        for i in range(0, len(nums) + 1):
            if i not in seen:
                return i