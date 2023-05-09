def closestNumbers(arr):
    # Write your code here
    sorted_arr = sorted(arr)
    result = []
    min_dif = 20000000
    for i in range(1, len(arr)):
        current_dif = sorted_arr[i] - sorted_arr[i - 1]
        if current_dif < min_dif:
            min_dif = current_dif
            result = []
            result.extend([sorted_arr[i - 1], sorted_arr[i]])
        elif current_dif == min_dif:
            result.extend([sorted_arr[i - 1], sorted_arr[i]])
    return result
