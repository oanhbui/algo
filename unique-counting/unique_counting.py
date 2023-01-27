def unique_counting(order):
    seen = set()
    for person in order:
        if person not in seen:
            seen.add(person)
    return len(seen)


def unique_count(order):
    return set(order)


