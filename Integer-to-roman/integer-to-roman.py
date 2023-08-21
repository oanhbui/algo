#integer to roman - leetcode - medium

class Solution:
    def intToRoman(self, num: int) -> str:
        lookup = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]

        result = []
        i = 0
        while num > 0:
            dividen = num // lookup[i][0]
            if dividen != 0:
                result.extend([lookup[i][1]] * dividen)
                num = num - dividen * lookup[i][0]
            i += 1
        return ''.join(result)
