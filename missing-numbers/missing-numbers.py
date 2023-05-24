#hackerRank - Missing numbers

#1

def missingNumbers(arr, brr):
    # Write your code here
    b_counter = {}
    for num_b in brr:
        if num_b in b_counter:
            b_counter[num_b] += 1
        else:
            b_counter[num_b] = 1
    result = []
    for num_a in arr:
        if num_a in b_counter:
            b_counter[num_a] -= 1
        else:
            result.append(num_a)
    for key, value in b_counter.items():
        if value > 0:
            result.append(key)
    return sorted(result)