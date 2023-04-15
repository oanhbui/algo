class Solution:
    def removeDuplicates(self, s: str) -> str:
        result = []
        for i in range(len(s)):
            if result and s[i] == result[-1]:
                result.pop()
            else:
                result.append(s[i])
        return ''.join(result)