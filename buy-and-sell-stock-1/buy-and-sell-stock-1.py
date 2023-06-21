#leetcode - Best time to Buy and Sell Stock 1 - easy

class Solution:
    def maxProfit(self, prices: List[int]) -> int: 
        max_profit = 0
        min_price = prices[0]
        for i in range(1, len(prices)):
            if prices[i] < min_price:
                min_price = prices[i]
            else:
                profit = prices[i] - min_price
                max_profit = max(max_profit, profit)
        return max_profit

