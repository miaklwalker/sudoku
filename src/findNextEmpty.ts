export default function findNextEmpty(gameBoard:(number|string)[][]){
    for (let i = 0 ; i < gameBoard.length ; i++){
        for (let j = 0 ; j < gameBoard[i].length ; j++){
            let cell = gameBoard[i][j] as string|number;
            if(cell === ' '){
                return [i,j] as [number,number];
            }
        }
    }
}