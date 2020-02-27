export function cellHash (cell:string|number){
    if(cell === "e"){
        return ' '
    }else if (cell >= 1){
        return Number(cell)
    }else{
        throw 'Please only pass a string of length 81 and containing "1 - 9 " & " e "'
    }
}


export default function parseString (puzzleHash:string) {
    if (puzzleHash.length !== 81) throw 'Please only pass a string of length 81 and containing "1 - 9 " & " e "';
    let result = Array.from({length:9},()=>Array(9).fill(' ')) as (number|string)[][];
    let hashed = [...puzzleHash].map(cellHash);
    let iterator = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 1; j < 10; j++) {
            result[i][j-1] = hashed[((j -1 + iterator))];
        }
        iterator+=9
    }
    return result;
}
