import findNextEmpty from "./findNextEmpty";
import {filterPossible} from "./filterPossible";


const stripSkip = (puzzle:any)=> puzzle.map((row:any[])=>row.map((cell:any) => cell==='s' ? ' ' : cell));


export default function solveCell(puzzle:any){
    let empty = findNextEmpty(puzzle);
    if(empty){
        const [x,y] = empty;
        let {0:value,length} = filterPossible(puzzle,empty);
        length > 1 ? puzzle[x][y]='s':puzzle[x][y]=value;
    }else{
        let stripped = stripSkip(puzzle);
        if(!findNextEmpty(stripped)){
            return undefined;
        }
        return stripped;
    }
    return puzzle;
}