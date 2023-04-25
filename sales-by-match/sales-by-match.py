#hackerRank - Sales by Match

def sockMerchant(n, ar):
    # Write your code here
    pair_count = 0
    classify = {}
    for color in ar:
        if color in classify:
            classify[color] = classify[color] + 1
        else:
            classify[color] = 1
        
        if classify[color] % 2 == 0:
            pair_count += 1
    return pair_count