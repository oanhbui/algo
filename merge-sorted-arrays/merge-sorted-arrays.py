#1

def merge_sorted_array(array1, array2):
    array1.extend(array2)
    array1.sort()
    return array1

print(merge_sorted_array([1, 2, 3, 4, 5], [3, 6, 7]))