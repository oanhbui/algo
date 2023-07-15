#Longest Arithmetic Subsequence of Given Difference - Medium

import math
class Solution:
    def longestSubsequence(self, arr: List[int], difference: int) -> int:
        lookup = {}
        for num in arr:
            lookup[num] = lookup.get(num - difference, 0) + 1
        longest = 0
        for value in lookup.values():
            longest = max(longest, value)
        return longest