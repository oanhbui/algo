#leetcode Isomorphic trings - easy

class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        pairs = {}
        values = set()
        for char_s, char_t in zip(s, t):
            if char_s not in pairs:
                if char_t in values:
                    return False
                pairs[char_s] = char_t
                values.add(char_t)
            else:
                if char_t != pairs.get(char_s):
                    return False
        return True