#leetcode - majority element (easy)

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        frequency_counter = {}
        for num in nums:
            frequency_counter[num] = frequency_counter.get(num, 0) + 1
        for key, value in frequency_counter.items():
            if value > len(nums) / 2:
                return key