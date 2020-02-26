// @ts-ignore
import normalize from "./normalize.ts";

export function filterPossible(puzzle: [(string | number)][], empty:[number,number]){
    const [x,y] = empty;
    let possible = [1,2,3,4,5,6,7,8,9] as number[];
    let grid = [normalize(x),normalize(y)];
    const [[xStart,xEnd],[yStart,yEnd]]=grid;
    // check Row
    puzzle[x].forEach((cell: number|string)=> {
        if (possible.includes(<number>cell)) {
            possible = possible.filter(el => el !== cell);
        }
    });
    // check column
    puzzle.forEach(row=>{
        if (possible.includes(<number>row[y])) {
            possible = possible.filter(el => el !== row[y]);
        }
    });
    // check grid
    for(let i = xStart ; i < xEnd ; i++){
        for(let j = yStart ; j < yEnd ; j++){
            if (possible.includes(<number>puzzle[i][j])) {
                possible = possible.filter(el => el !== puzzle[i][j]);
            }
        }
    }
    return possible as number[];
};