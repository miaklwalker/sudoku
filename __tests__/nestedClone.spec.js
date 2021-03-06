import nestedClone from "../src/nestedClone";

describe('Should produce a exact clone of a nested array',()=>{
    const stringify = (input) => JSON.stringify(input);
    it('should match array exactly',()=>{
        let testExample = [[0,1,2,3]];
        expect(stringify(nestedClone(testExample))).toBe(stringify(testExample));
    });
    it("shouldn't maintain reference to the original array",()=>{
        let testSet = [[0,1,2,'s']];
        let clone = nestedClone(testSet);
        clone[0][0] = 1 ;
        expect(clone[0][0]).toBe(1);
        expect(testSet[0][0]).toBe(0);
    })
});