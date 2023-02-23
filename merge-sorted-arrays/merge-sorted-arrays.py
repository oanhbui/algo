#1

def merge_sorted_array1(array1, array2):
    array1.extend(array2)
    array1.sort()
    return array1

#print(merge_sorted_array1([1, 2, 3, 4, 5], [3, 6, 7]))

#2

def merge_sorted_array2(array1, array2):
    len1 = len(array1)
    len2 = len(array2)
    pointer1 = 0
    pointer2 = 0
    final = []
    while pointer1 < len1 and pointer2 < len2:
        if array1[pointer1] <= array2[pointer2]:
            final.append(array1[pointer1])
            pointer1 += 1
        else:
            final.append(array2[pointer2])
            pointer2 += 1
    if pointer1 < len1:
        while pointer1 < len1:
            final.append(array1[pointer1])
            pointer1 += 1
    else:
        while pointer2 < len2:
            final.append(array2[pointer2])
            pointer2 += 1
    return final
        
print(merge_sorted_array2([-4, -2], [3, 6, 7, 8, 9]))