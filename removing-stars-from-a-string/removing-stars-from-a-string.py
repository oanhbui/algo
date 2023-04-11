class Solution:
    def removeStars(self, s: str) -> str:
        result = []
        for char in s:
            if char == '*' and len(result) > 0:
                result.pop()
            else:
                result.append(char)
        return ''.join(result)