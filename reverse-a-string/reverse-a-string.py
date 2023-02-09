def reverse_a_string(str):
    char_array = list(str)
    for i in range(floor(len(char_array)/2)):
        left_char = char_array[i]
        right_char = char_array[len(char_array) - i]
        char_array[i] = right_char
        char_array[len(char_array) - i] = left_char
    return ''.join(char_array)