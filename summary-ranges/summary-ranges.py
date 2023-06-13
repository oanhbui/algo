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
    
#2

def summaryRanges(self, nums: List[int]) -> List[str]:
        result = []
        start, end = None, None
        for i in range(len(nums)):
            if start is None:
                start = nums[i]
            elif nums[i] - nums[i - 1] == 1:
                end = nums[i]
            else:
                if end is not None:
                    result.append(f"{start}->{end}")
                else:
                    result.append(f"{start}")
                start = nums[i]
                end = None
        if start is not None:
            if end is not None:
                result.append(f"{start}->{end}")
            else:
                result.append(f"{start}")
        return result

#3

class Solution:
    def convert_output(self, start, end):
        if end is not None:
            return f"{start}->{end}"
        else:
            return f"{start}"


    def summaryRanges(self, nums: List[int]) -> List[str]:
        result = []
        start, end = None, None
        for i in range(len(nums)):
            if start is None:
                start = nums[i]
            elif nums[i] - nums[i - 1] == 1:
                end = nums[i]
            else:
                result.append(self.convert_output(start, end))
                start = nums[i]
                end = None
        if start is not None:
            result.append(self.convert_output(start, end))
        return result
    
#4

class Solution:

    def summaryRanges(self, nums: List[int]) -> List[str]:
        result = []
        start = 0
        i = 0
        n = len(nums)
        while i < n:
            start = nums[i]
            while i + 1 < n and nums[i + 1] - nums[i] == 1:
                i += 1
            if nums[i] == start:
                result.append(f"{nums[i]}")
            else:
                result.append(f"{start}->{nums[i]}")
            i += 1
        return result