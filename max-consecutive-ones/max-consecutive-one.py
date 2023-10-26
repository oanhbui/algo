#max-consecutive-ones-iii / medium

class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        cur_zero = 0
        head = 0
        tail = 0
        max_length = 0
        for head in range(len(nums)):
            if nums[head] == 0:
                cur_zero += 1
            while cur_zero > k:
                if nums[tail] == 0:
                    cur_zero -= 1
                tail += 1
            max_length = max(max_length, head - tail + 1)
        return max_length