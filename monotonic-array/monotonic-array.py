#leetcode - monotonic array - easy

class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        for i in range(len(nums) - 1):
            if nums[i] < nums[i + 1]:
                i += 1
                while i < len(nums) - 1:
                    if nums[i] > nums[i + 1]:
                        return False
                    else:
                        i += 1
                return True
            if nums[i] > nums[i + 1]:
                i += 1
                while i < len(nums) - 1:
                    if nums[i] < nums[i + 1]:
                        return False
                    else:
                        i += 1
                return True
        return True