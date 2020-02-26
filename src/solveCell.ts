// @ts-ignore
import findNextEmpty from "./findNextEmpty.ts";
// @ts-ignore
import {filterPossible} from "./filterPossible.ts";


const stripSkip = (puzzle:any)=> puzzle.map((row:any[])=>row.map((cell:any) => cell==='s' ? ' ' : cell));


export default function solveCell(puzzle:any){
    let empty = findNextEmpty(puzzle);
    if(empty!==undefined){
        const [x,y] = empty;
        let possible = filterPossible(puzzle,empty);
        if(possible.length > 1){puzzle[x][y]='s'}
        if(possible.length===1){puzzle[x][y]=possible[0]}
    }else{
        if(findNextEmpty(stripSkip(puzzle))===undefined){
            return undefined;
        }
        return stripSkip(puzzle)
    }
    return puzzle;
}