#leetcode - medium - remove duplicates from sorted array 2

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        w = 0
        count = None
        last_num = None
        for r in range (len(nums)):
            if r == 0 or nums[r] != last_num:
                count = 1
                last_num = nums[r]
            else:
                count += 1
            if count <= 2:
                nums[w] = nums[r]
                w += 1
        return w