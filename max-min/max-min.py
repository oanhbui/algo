#hackerRank - Max min

def maxMin(k, arr):
    # Write your code here
    if k == len(arr):
        return max(arr) - min(arr)
    arr.sort()
    result = 1000000000000
    start = 0
    for end in range(k - 1, len(arr)):
        current_unfair = arr[end] - arr[start]
        if current_unfair < result:
            result = current_unfair
        start += 1
    return result