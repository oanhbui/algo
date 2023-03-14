    def removeElement(self, nums: List[int], val: int) -> int:
        w = 0
        r = 0
        while r < len(nums):
            if nums[r] != val:
                nums[r], nums[w] = nums[w], nums[r]
                w += 1
            r += 1
        return w