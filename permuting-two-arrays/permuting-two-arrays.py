#HackerRank Permuting Two Arrays

def twoArrays(k, A, B):
    # Write your code here
    A.sort(reverse=True)
    B.sort()
    for i in range(len(A)):
        if A[i] + B[i] < k:
            return 'NO'
    return 'YES'