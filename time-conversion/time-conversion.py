def timeConversion(s):
    # Write your code here
    s_arr = s.split(':')
    if s_arr[2][2] == 'A' and s_arr[0] == '12':
        s_arr[0] = '00'
    elif s_arr[2][2] == 'P' and int(s_arr[0]) >= 1 and int(s_arr[0]) <= 11:
        s_arr[0] = str(int(s_arr[0]) + 12)
    return ':'.join(s_arr)[0:8]

#cleaner version

def timeConversion(s):
    # Write your code here
    s_arr = s.split(':')
    hour = s_arr[0]
    minute = s_arr[1]
    second = s_arr[2][0:2]
    am_pm = s_arr[2][2:]
    if am_pm == 'AM' and hour == '12':
        hour = '00'
    elif am_pm == 'PM' and int(hour) >= 1 and int(hour) <= 11:
        hour = str(int(hour) + 12)
    return f'{hour}:{minute}:{second}'