#https://leetcode.com/problems/reverse-vowels-of-a-string/

class Solution:
    def reverseVowels(self, s: str) -> str:
        vowel_list = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        list_of_s = list(s)
        left = 0
        right = len(s) - 1
        while left < right:
            while left < right and list_of_s[left] not in vowel_list:
                left += 1
            while right > left and list_of_s[right] not in vowel_list:
                right -= 1
            left_vowel = list_of_s[left]
            list_of_s[left] = list_of_s[right]
            list_of_s[right] = left_vowel
            left += 1
            right -= 1
        return ''.join(list_of_s)



class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        sList = list(s)
        sVowels = []
        for ch in sList:
            if ch in vowels:
                sVowels.append(ch)
        index = 0
        for k in range(len(sList) - 1, -1, -1):
            if sList[k] in vowels:
                sList[k] = sVowels[index]
                index += 1
        return ''.join(sList)