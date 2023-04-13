#https://leetcode.com/problems/simplify-path/

class Solution:
    def simplifyPath(self, path: str) -> str:
        path_split = path.split('/')
        result = []
        for s in path_split:
            if s == '..' and len(result) > 0:
                result.pop()
            elif s != '.' and s != '..' and s != '':
                result.append(s)
        return f'/{"/".join(result)}'