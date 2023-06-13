#Leetcode - Summary Ranges (easy)

#1
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        result = []
        new_range = []
        for i in range(len(nums)):
            if len(new_range) == 0 or nums[i] - nums[i - 1] == 1:
                new_range.append(nums[i])
            else:
                result.append(new_range)
                new_range = [nums[i]]
        if len(new_range) != 0:
            result.append(new_range)
        for i in range(len(result)):
            if len(result[i]) == 1:
                result[i] = str(result[i][0])
            else:
                result[i] = f"{result[i][0]}->{result[i][-1]}"
        return result