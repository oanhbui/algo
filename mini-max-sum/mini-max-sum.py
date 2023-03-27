def miniMaxSum(arr):
    # Write your code here
    max = arr[0]
    min = arr[0]
    sum = arr[0]
    for i in range(1, len(arr)):
        if arr[i] > max:
            max = arr[i]
        elif arr[i] < min:
            min = arr[i]
        sum += arr[i]
    print (sum - max, sum - min)