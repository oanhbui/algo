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