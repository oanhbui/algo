#leetcode - medium - longest subarray of 1s after deleting one element

#1
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        zero_count = 0
        max_length = 0
        left = -1
        for right in range(len(nums)):
            if nums[right] == 0:
                zero_count += 1
            while left < right and zero_count > 1:
                left += 1
                if nums[left] == 0:
                    zero_count -= 1
                
            length = right - left
            max_length = max(max_length, length)
        return max_length - 1
