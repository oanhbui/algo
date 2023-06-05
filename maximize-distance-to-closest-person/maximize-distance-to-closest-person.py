#leetcode - Maximize Distance to Closest Person

import math
class Solution:
    def maxDistToClosest(self, seats: List[int]) -> int:
        result = [0] * len(seats)
        not_empty = -float('inf')
        for i in range(0, len(seats)):
            if seats[i] == 1:
                not_empty = i
            result[i] = i - not_empty
        not_empty = float('inf')
        for i in range(len(seats) - 1, -1, -1):
            if seats[i] == 1:
                not_empty = i
            result[i] = min(result[i], not_empty - i)
        return max(result)