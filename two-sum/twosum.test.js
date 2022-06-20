import { twoSum, twoSumHashmap } from './twosum.js';

describe('two sum test', () => {
    it('should return two index that sum to target', () => {
        expect(twoSum([1,2,3,4,5,6,7], 5)).toEqual([0, 3])
    });

    it('should return -1, -1 when cannot found any number sum to target', () => {
        expect(twoSum([1,2,3,4,5,6,7], 20)).toEqual([-1, -1])
    });
});

describe('two sum hasmap', () => {
    it('should return two index that sum to target', () => {
        expect(twoSumHashmap([1,2,3,4,5,6,7], 5)).toEqual([0, 3])
    });

    it('should return -1, -1 when cannot found any number sum to target', () => {
        expect(twoSumHashmap([1,2,3,4,5,6,7], 20)).toEqual([-1, -1])
    });
});