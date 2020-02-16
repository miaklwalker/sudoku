

export function cellHash (cell:string|number){
    if(cell === "e"){
        return ' '
    }else if (cell >= 1){
        return Number(cell)
    }else{
        throw 'Please only pass a string of length 81 and containing "1 - 9 " & " e "'
    }
}

export function cellMap (array: any[]) {
    let iterator = 0;
  return
}

export default function parseString (puzzleHash:string) {
    if(puzzleHash.length !== 81)throw 'Please only pass a string of length 81 and containing "1 - 9 " & " e "';
    let result = Array(9).fill(Array(9).fill(' '));
    let iterator = 0;
    [...puzzleHash].map(cellHash).forEach((cell: number | string, index: number) => {
        result[iterator][index % 9] = cell;
        index % 9 === 0 && index > 9 && iterator++;
    });
    return result;
}
