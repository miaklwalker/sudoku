import normalize from "./normalize";

const normalizeArray = ([x,y]:[number,number]) => [normalize(x),normalize(y),x,y] as [[number,number],[number,number],number,number];

export function filterPossible(puzzle: [(string | number)][], empty:[number,number]){
    const [[xStart,xEnd],[yStart,yEnd],x,y] = normalizeArray(empty);
    let possible = [1,2,3,4,5,6,7,8,9] as number[];
    puzzle.forEach((row,i)=>{
        row.forEach((cell,j)=>{
            let checkGrid = (i >= xStart && i < xEnd && j >= yStart && j < yEnd);
            if((j === y ||i === x || checkGrid)  && possible.includes(<number>cell) ){
                possible = possible.filter(el => el !== cell);
            }
        })
    });
    return possible as number[];
}