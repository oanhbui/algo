class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        greatestNum = max(candies)
        result = []
        for origin in candies:
            if origin + extraCandies >= greatestNum:
                result.append(True)
            else:
                result.append(False)
        return result