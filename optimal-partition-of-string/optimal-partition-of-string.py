#https://leetcode.com/problems/optimal-partition-of-string/

class Solution:
    def partitionString(self, s: str) -> int:
        count = 0
        seen = set(s[0])
        for char in s:
            if char in seen:
                seen.clear()
                seen.add(char)
                count += 1
            seen.add(char)
        return count