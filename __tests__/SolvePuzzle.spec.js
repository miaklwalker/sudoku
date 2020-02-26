import puzzles from "../src/puzzles";
import parseString from "../src/parseString";
import solvePuzzle from "../src/solvePuzzle";

describe('It should take a puzzle string hash and return a solved puzzle as an array',()=>{
    let expected = solvePuzzle(puzzles.one.puzzle);
    let result = parseString(puzzles.one.solution)
    test('It should return back a puzzle hash of a solved puzzle',()=>{
        expect(expected).toMatchObject(result);
    });
    test('it can accept both a hash or a nested array as arguments',()=>{
        let testData = puzzles.one.puzzle;
        expect(solvePuzzle(testData)).toMatchObject(result);
        let testArray = parseString(testData);
        expect(solvePuzzle(testArray)).toMatchObject(result);
    })
});