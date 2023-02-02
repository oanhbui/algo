#https://leetcode.com/problems/merge-similar-items/

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
            