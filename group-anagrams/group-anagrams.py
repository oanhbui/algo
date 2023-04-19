class Solution:
    def key_by_sort(self, strs):
        return ''.join(sorted(strs))

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        sortMap = {}
        for s in strs:
            key = self.key_by_sort(s)
            if key in sortMap:
                sortMap[key].append(s)
            else:
                sortMap[key] = [s]
        return list(sortMap.values())