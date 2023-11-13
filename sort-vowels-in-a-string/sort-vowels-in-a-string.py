#leetcode - sort vowels in a string - medium

#1

def sortVowels(self, s: str) -> str:
        
        vowels = set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
        vowels_by_index = {}
        for index, char in enumerate(s):
            if char in vowels:
                vowels_by_index[index] = char
        s_vowels = sorted(vowels_by_index.values())
        s_list = list(s)
        check = 0
        for i in range(len(s_list)):
            if s_list[i] in vowels:
                s_list[i] = s_vowels[check]
                check += 1
        return "".join(s_list)

#2

def sortVowels(self, s: str) -> str:
        
        vowels = "AEIOUaeiou"
        vowels_by_index = {}
        for index, char in enumerate(s):
            if char in vowels:
                vowels_by_index[char] = vowels_by_index.get(char, 0) + 1
        vowels_sorted = []
        for char in vowels:
            if char in vowels_by_index:
                vowels_sorted.extend([char] * vowels_by_index[char])
        s_list = list(s)
        check = 0
        print(vowels_sorted)
        for i in range(len(s_list)):
            if s_list[i] in vowels_by_index:
                s_list[i] = vowels_sorted[check]
                check += 1
        return "".join(s_list)