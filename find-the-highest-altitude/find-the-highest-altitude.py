#find the highest altitude - leetcode - easy

class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        altitudes = [0]
        highest = 0
        for num in gain:
            cur_altitude = altitudes[-1] + num
            highest = max(highest, cur_altitude)
            altitudes.append(cur_altitude)
        return highest