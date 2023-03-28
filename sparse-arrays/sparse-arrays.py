def matchingStrings(strings, queries):
    # Write your code here
    results = []
    seen = {}
    for item in strings:
        if item in seen:
            seen[item] += 1
        else:
            seen[item] = 1
    for item in queries:
        if item in seen:
            results.append(seen.get(item))
        else:
            results.append(0)
    return results