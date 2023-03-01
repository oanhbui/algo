def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        w = 0
        n = len(nums)
        for r in range(0, n):
            if nums[r] != 0:
                nums[r], nums[w] = nums[w], nums[r]
                w += 1
        return nums