from collections import Counter

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ransomChars = Counter(ransomNote);
        remain = ransomChars - Counter(magazine)
        return not remain