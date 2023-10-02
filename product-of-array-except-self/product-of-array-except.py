#leetcode - product of Array except self - medium

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