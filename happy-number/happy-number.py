#leetcode - happy number - easy

class Solution:
    def sumOfSquares(self, num):
        result = 0
        while num > 0:
            result += (num % 10)**2
            num = num // 10
        return result

    def isHappy(self, n: int) -> bool:
        seen = set()
        sum = self.sumOfSquares(n)
        seen.add(n)
        while sum != 1:
            if sum in seen:
                return False
            seen.add(sum)
            sum = self.sumOfSquares(sum)
        return True