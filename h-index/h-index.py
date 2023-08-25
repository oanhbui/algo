#leetcode - h index - medium

class Solution:
    def hIndex(self, citations: List[int]) -> int:
        def is_h_index(h, citations):
            count = 0
            for num in citations:
                if num >= h:
                    count += 1
            return count >= h
        result = 0
        for h in range(len(citations) + 1):
            if is_h_index(h, citations):
                result = h
        return result