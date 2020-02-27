import parseString from "./parseString";
import nestedClone from "./nestedClone";
import solveCell from "./solveCell";


export default function solvePuzzle(puzzle: any){
    let mappedPuzzle = typeof puzzle === 'string' ? parseString(puzzle) as [string|number][] : puzzle;
    let temp = nestedClone(mappedPuzzle);
    console.time();
    let control = Date.now();
    while (true) {
        let puzzle =  solveCell(temp);
        if(puzzle!==undefined){
        temp = puzzle;
        if(Date.now()-control >2000){
            console.log('Timed out!');
            return temp;
        }
        }else{
            console.timeEnd();
            console.table(temp);
            return temp;
        }
    }

}