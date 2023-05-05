#hackerRank - Number line jumps

def kangaroo(x1, v1, x2, v2):
    # Write your code here
    distance = abs(x1 - x2)
    if distance == 0:
        return 'YES'
    prevDistance = 10001
    while (distance < prevDistance):
        x1 += v1
        x2 += v2
        prevDistance = distance
        distance = abs(x1 - x2)
        if (distance == 0):
            return 'YES'
    return 'NO'