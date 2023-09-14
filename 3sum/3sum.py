#leetcode 3sum medium

class Solution:
    def twoSum(self, nums, target):
        seen = set()
        result = []
        for num in nums:
            to_find = target - num
            if to_find in seen:
                result.append((num, to_find))
            else:
                seen.add(num)
        return result
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result = set()
        for i in range(len(nums) - 2):
            target = 0 - nums[i]
            area = nums[i + 1:]
            couples = self.twoSum(area, target)
            for couple in couples:
                couple += (nums[i], )
                triple = tuple(sorted(couple))
                result.add(triple)
        return list(result)
