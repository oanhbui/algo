#Leetcode - Maximum number of vowels in a substring of given length

def maxVowels(self, s: str, k: int) -> int:
        vowels = set(['a', 'e', 'i', 'o', 'u'])
        starter_count = 0
        for i in range(k):
            if s[i] in vowels:
                starter_count += 1
        max_count = starter_count
        end = k
        while end < len(s):
            if s[end] in vowels:
                starter_count += 1
            if s[end - k] in vowels:
                starter_count -= 1
            max_count = max(max_count, starter_count)
            end += 1
        return max_count