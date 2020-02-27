import filterPossible from "../src/filterPossible";
import parseString from "../src/parseString";
import puzzles from "../src/puzzles";
import findNextEmpty from "../src/findNextEmpty";

describe('should filter out and return all possibilities for cell',()=>{
    let testPuzzle;
    let empty;
    beforeEach(()=>{
        testPuzzle = parseString(puzzles.one.puzzle);
        empty = findNextEmpty(testPuzzle);
    });

    it('should return the results as an array of possibilities',()=>{
        let expectedResult = [3,7];
        expect(filterPossible(testPuzzle,empty)).toMatchObject(expectedResult);
    })
});