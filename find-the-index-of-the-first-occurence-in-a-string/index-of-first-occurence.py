#leetcode - Find the Index of the First Occurrence in a String - easy 


class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if len(needle) > len(haystack):
            return -1
        first_occur = needle[0]
        for i in range(0, len(haystack)):
            if haystack[i] == first_occur:
                if haystack[i:i + len(needle)] == needle:
                    return i
        return -1