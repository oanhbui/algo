#leetcode - medium - restore the array from adjacent pairs

from collections import defaultdict

class Solution:
    def restoreArray(self, adjacentPairs: List[List[int]]) -> List[int]:
        neighbors = defaultdict(list)
        for a, b in adjacentPairs:
            neighbors[a].append(b)
            neighbors[b].append(a)
        head = None
        for key, value in neighbors.items():
            if len(value) == 1:
                head = key
                break
        result = [head, neighbors[head][0]]
        prev = head
        while len(neighbors[result[-1]]) > 1:
            candidate1, candidate2 = neighbors[result[-1]]  
            if candidate1 == prev:
                result.append(candidate2)
            else:
                result.append(candidate1)
            prev = result[-2]
        return result
