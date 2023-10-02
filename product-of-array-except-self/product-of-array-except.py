#leetcode - product of Array except self - medium

#1
def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        from_left = 1
        from_right = 1
        left_product = [0] * n
        right_product = [0] * n
        for i in range(n):
            from_left *= nums[i]
            left_product[i] = from_left
            from_right *= nums[n - i - 1]
            right_product[n - i - 1] = from_right
        result = [0] * n
        for i in range(n):
            if i == 0:
                result[i] = right_product[i + 1]
            elif i == n - 1:
                result[i] = left_product[n - 2]
            else:
                result[i] = left_product[i - 1] * right_product[i + 1]
        return result

#2
def productExceptSelf(self, nums: List[int]) -> List[int]:
        zero_count = 0
        nonzero_product = 1
        for num in nums:
            if num == 0:
                zero_count += 1
            else:
                nonzero_product *= num
        result = [0] * len(nums)
        if zero_count >= 2:
            return result
        if zero_count == 1:
            for i in range(len(nums)):
                if nums[i] != 0:
                    result[i] = 0
                else:
                    result[i] = nonzero_product
            return result
        for i in range(len(nums)):
            result[i] = nonzero_product // nums[i]
        return result