/**
 * Return intersection of nums1 and nums2
 * @param {*} nums1 
 * @param {*} nums2 
 * @example intersection([1,4,7,2], [2,8,9,10,4]) = [2, 4]
 * @example intersection([1,4,7,2], [11,8,9,10,5]) = []
 */
// export function intersection(nums1, nums2) {
//     let result = [];
//     for (let i = 0; i < nums1.length; i++) {
//         const num = nums1[i];
//         if (nums2.includes(num)) {
//             result.push(num)
//         }
//     }
//     return result;
// }

export function intersection(nums1, nums2) {
    let result = [];

    const nums2Index = {};
    for (let j = 0; j < nums2.length; j++) {
        nums2Index[nums2[j]] = j
    };

    for (let i = 0; i < nums1.length; i++) {
        const num = nums1[i];
        if (nums2Index[num] !== undefined) {
            result.push(num)
        }
    }
    return result;
}

