def timeConversion(s):
    # Write your code here
    s_arr = s.split(':')
    if s_arr[2][2] == 'A' and s_arr[0] == '12':
        s_arr[0] = '00'
    elif s_arr[2][2] == 'P' and int(s_arr[0]) >= 1 and int(s_arr[0]) <= 11:
        s_arr[0] = str(int(s_arr[0]) + 12)
    return ':'.join(s_arr)[0:8]