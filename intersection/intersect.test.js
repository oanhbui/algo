import {intersection} from './intersection.js'

describe('Test intersect naive', () => {
    it('should return 2,4 as a result', () => {
        expect(intersection([1,2,3,4,5], [2,4,9,10,20,100])).toEqual([2, 4])
    });

    it('should return empty as a result', () => {
        expect(intersection([1,2,3,4,5], [10,23,44,345,45,65])).toEqual([])
    });

    it('should return [2,3,4] as result', () => {
        expect(intersection([1,2,3,4,5], [2,2,3,4,4,4])).toEqual([2,3,4])
    });

})