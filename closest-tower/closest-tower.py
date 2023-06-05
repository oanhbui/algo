# We have 1D road. free road denotes by 0 and, some cell tower denote by 1.
# For example [0,0,0,0,1,0,0,1,1,0,0]
# Can you calculate smallest distance to the closest tower at each point on the road

# The result for
# [0,0,0,0,1,0,0,1,1,0,0] should be
# [4,3,2,1,0,1,1,0,0,1,2]
import math

def closest_tower(s):
    [0,0,0,0,1,0,0,1,1,0,0]
    result = [float('inf')] * len(s)
    last_tower = float('-inf')
    for i in range(len(s)):
        if s[i] == 1:
            last_tower = i
            result[i] = 0
        result[i] = i - last_tower
    last_tower = float('inf')
    for j in range(len(s) - 1, -1, -1):
        if s[j] == 1:
            last_tower = j
        result[j] = min(result[j], last_tower - j)
    return result
    # #1
    # tower_position = []
    # for i in range(len(s)):    
    #     if s[i] == 1:
    #         tower_position.append(i)
    # if len(tower_position) < 1:
    #     return [-1] * len(s)
    # result = [0] * len(s) 
    # # for j in range(len(s)):  #On
    # #     if j < tower_position[0]:
    # #         result[j] = tower_position[0] - j
    # #     elif j > tower_position[-1]:
    # #         result[j] = j - tower_position[-1]
    # #     else:
    # #         for k in range(len(tower_position) - 1):
    # #             if abs(tower_position[k] - tower_position[k + 1]) > 1 and s[j] != 1:
    # #                 result[j] = min(j - tower_position[k], tower_position[k + 1] - j)
    # # return result
    # # current = 0
    # # for j in range(len(s)):
    # #     if j > tower_position[current] and current != len(tower_position) - 1:
    # #         current += 1
    # #     if current > 0:
    # #         result[j] = min(j - tower_position[current - 1], abs(tower_position[current] - j))
    # #     else:
    # #         result[j] = abs(tower_position[current] - j)
    # # return result

    # tower_position = [-float('inf')] + tower_position + [float('inf')]
    # current = 1
    # for j in range(len(s)):
    #     if j > tower_position[current]:
    #         current += 1
    #     result[j] = min(j - tower_position[current - 1], abs(tower_position[current] - j))
    # return result



assert closest_tower([]) == []
assert closest_tower([1, 0, 0, 0, 1]) == [0, 1, 2, 1, 0]
assert closest_tower([1, 0, 0, 0, 0, 0]) == [0, 1, 2, 3, 4, 5]
# assert closest_tower([0, 0, 0, 0]) == [-1, -1, -1, -1]
assert closest_tower([1, 1, 1, 1]) == [0, 0, 0, 0]
assert closest_tower([0, 0, 0, 0, 1]) == [4, 3, 2, 1, 0]
assert closest_tower([0,0,0,0,1,0,0,1,1,0,0]) == [4,3,2,1,0,1,1,0,0,1,2]






