import parseString from "../src/parseString";
import findNextEmpty from "../src/findNextEmpty";

describe('Finds the next empty cell',()=>{
   it('Should accept a nested array and return the [x,y] of the next cell containing " " ',()=>{
       let firstTest = parseString('123456789'.padEnd(81,'e'));
       expect(findNextEmpty(firstTest)[0]).toEqual(1);
       expect(findNextEmpty(firstTest)[1]).toEqual(0);
       let secondTest = parseString('53ee7eeee6ee195eeee98eeee6e8eee6eee34ee8e3ee17eee2eee6e6eeee28eeee419ee5eeee8ee79');
       expect(findNextEmpty(secondTest)[0]).toEqual(0);
       expect(findNextEmpty(secondTest)[1]).toEqual(2);
   });
});