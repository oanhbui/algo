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


#method 2 - using binary search

class Solution:
    def find_addup(self, numbers, addup, start):
        lo = start
        hi = len(numbers) - 1
        while lo <= hi:
            mid = (lo + hi) // 2
            if numbers[mid] == addup:
                return mid
            elif numbers[mid] > addup:
                hi = mid - 1
            else:
                lo = mid + 1
        return -1
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        for (index, num) in enumerate(numbers):
            addup = target - num
            to_find = self.find_addup(numbers, addup, index + 1)
            if to_find != -1:
                return [index + 1, to_find + 1]