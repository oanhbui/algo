def reverse_a_string(s):
    
    char_array = list(s)
    for i in range((len(char_array) // 2)):
        left_char = char_array[i]
        right_char = char_array[len(char_array) - 1 - i]
        char_array[i] = right_char
        char_array[len(char_array) - 1 - i] = left_char
    return ''.join(char_array)


assert reverse_a_string('') == ''
assert reverse_a_string('a') == 'a'
assert reverse_a_string('abc') == 'cba'
assert reverse_a_string('abcd') == 'dcba'
assert reverse_a_string('abc defg') == 'gfed cba'
