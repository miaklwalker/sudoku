// @ts-ignore
import parseString from "./parseString.ts";
// @ts-ignore
import nestedClone from "./nestedClone.ts";
// @ts-ignore
import solveCell from "./solveCell.ts";


export default function solvePuzzle(puzzle: any){
    let mappedPuzzle = typeof puzzle === 'string' ? parseString(puzzle) as [string|number][] : puzzle;
    let temp = nestedClone(mappedPuzzle);
    let i = 0;
    while (true) {
        let puzzle =  solveCell(temp);
        if(puzzle!==undefined){
        temp = puzzle;
        i++
        }else{
            return temp;
        }
    }

}