#leetcode - zigzag conversion - medium

class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        result = [[] for i in range(numRows)]
        i = 0
        write = 0
        while i < len(s):
            while write < numRows and i < len(s):
                print('down', write, s[i])
                result[write].append(s[i])
                write += 1
                i += 1  
            write = numRows - 2
            while write >= 0 and i < len(s):
                print('up', write, s[i])
                result[write].append(s[i])
                write -= 1
                i += 1
            write = 1
                
        collect = []
        for word in result:
            collect.extend(word)
        return ''.join(collect)