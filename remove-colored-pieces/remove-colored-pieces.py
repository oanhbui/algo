#leetcode -  Remove Colored Pieces if Both Neighbors are the Same Color - Medium


class Solution(object):

    def winnerOfGame(self, colors):
        """
        :type colors: str
        :rtype: bool
        """

        lookup = {}
        for i in range(1, len(colors) - 1):
            if colors[i] == colors[i - 1] and colors[i] == colors[i + 1]:
                lookup[colors[i]] = lookup.get(colors[i], 0) + 1
 
        a_moves = lookup.get("A", 0)
      
        b_moves = lookup.get("B", 0)
        return a_moves > b_moves
