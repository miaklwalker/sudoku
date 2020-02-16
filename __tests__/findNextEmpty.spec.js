import parseString from "../src/parseString";
import findNextEmpty from "../src/findNextEmpty";

describe('Finds the next empty cell',()=>{
   it('Should accept a nested array and return the [x,y] of the next cell containing " " ',()=>{
      let testGame = parseString('123456789'.padEnd(81,'e'));
       expect(findNextEmpty(testGame)).toBe(expect.arrayContaining([1,0]));
   });
});