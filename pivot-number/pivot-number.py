#pivot number - leetcode - easy

class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        all_nums = 0
        for num in nums:
            all_nums += num
        left_sum = 0
        right_sum = all_nums
        for i in range(len(nums)):
            if i > 0:
                left_sum += nums[i - 1]
            right_sum = all_nums - left_sum - nums[i]
            if left_sum == right_sum:
                return i
        return -1
            