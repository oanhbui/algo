#leetcode - medium 

import math
class Solution:
    def intervalIntersection(self, firstList: List[List[int]], secondList: List[List[int]]) -> List[List[int]]:
        result = []
        f = 0
        s = 0
        m = len(firstList)
        n = len(secondList)
        while f < m and s < n:
            f_start, f_end = firstList[f]
            s_start, s_end = secondList[s]
            intersect_start = max(f_start, s_start)
            intersect_end = min(f_end, s_end)
            if intersect_start <= intersect_end:
                result.append([intersect_start, intersect_end])
            if f_end <= s_end:
                f += 1
            else:
                s += 1
        return result