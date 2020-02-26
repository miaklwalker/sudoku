import normalize from "../src/normalize";

describe('This should normalize a inout the 0th index multiple of three',()=>{
    it('should take a number less than 9 and return the nearest multiple of three 0 indexed',()=>{
        expect(normalize(0)).toMatchObject([0,3]);
        expect(normalize(1)).toMatchObject([0,3]);
        expect(normalize(2)).toMatchObject([0,3]);
        expect(normalize(3)).toMatchObject([3,6]);
        expect(normalize(4)).toMatchObject([3,6]);
        expect(normalize(5)).toMatchObject([3,6]);
        expect(normalize(6)).toMatchObject([6,9]);
        expect(normalize(7)).toMatchObject([6,9]);
        expect(normalize(8)).toMatchObject([6,9]);
    })
});