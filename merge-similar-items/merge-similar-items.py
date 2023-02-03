#https://leetcode.com/problems/merge-similar-items/

#Solution1
class Solution(object):
    def mergeSimilarItems(self, items1, items2):
        """
        :type items1: List[List[int]]
        :type items2: List[List[int]]
        :rtype: List[List[int]]
        """        
        result = items1[::] 
        for value, weight in items2: 
            found = False
            for i in range(0, len(result)): 
                if value == result[i][0]:
                    result[i][1] += weight
                    found = True
            if not found:
                result.append([value, weight])
        return sorted(result)
            
#Solution2 using Map()
class Solution:
    def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:
        weights = {}
        for value, weight in items1 + items2:
            if value not in weights:
                weights[value] = weight
            else:
                weights[value] += weight    
        return sorted(list(weights.items()))


#Solution3 using Counter
from collections import Counter

class Solution:
    def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:
        weights = Counter(dict(items1)) + Counter(dict(items2))
        return sorted(list(weights.items()))