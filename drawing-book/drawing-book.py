import math

def pageCount(n, p):
    # Write your code here
    total_flip = math.floor(n / 2)
    front_flip = math.floor(p / 2)
    back_flip = total_flip - front_flip
    return min(front_flip, back_flip)