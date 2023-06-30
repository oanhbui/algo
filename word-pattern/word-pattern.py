#leetcode - Word Pattern - easy

class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        s = s.split()
        if len(s) != len(pattern):
            return False
        index_map = {}
        for i in range(len(pattern)):
            if pattern[i] not in index_map:
                index_map[pattern[i]] = s[i]
            else:
                if s[i] != index_map.get(pattern[i]):
                    return False
        return len(set(index_map.values())) == len(index_map.keys())
        