#leetcode - majority element (easy)

#1

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        frequency_counter = {}
        for num in nums:
            frequency_counter[num] = frequency_counter.get(num, 0) + 1
        for key, value in frequency_counter.items():
            if value > len(nums) / 2:
                return key
            

#2

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        sorted_nums = sorted(nums)
        half = len(nums) / 2
        count = 1
        for i in range(1, len(nums)):
            if sorted_nums[i] == sorted_nums[i - 1]:
                count += 1
            else:
                count = 1
            if count > half:
                return sorted_nums[i]
        return nums[0]