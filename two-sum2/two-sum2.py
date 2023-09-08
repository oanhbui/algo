#twosum 2 - medium

#method 1 - two pointer

class Solution:

    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        lo = 0
        hi = len(numbers) - 1
        while lo < hi:
            twosum = numbers[lo] + numbers[hi]
            if  twosum == target:
                return [lo + 1, hi + 1]
            elif twosum > target:
                hi -= 1
            else:
                lo += 1 