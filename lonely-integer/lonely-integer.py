#https://www.hackerrank.com/challenges/three-month-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two


#1
def lonelyinteger(a):
    # Write your code here
    seen = {}
    for num in a:
        if num in seen:
            seen[num] = seen[num] + 1
        else:
            seen[num] = 1
    for (key, value) in seen.items():
        if value == 1:
            return key