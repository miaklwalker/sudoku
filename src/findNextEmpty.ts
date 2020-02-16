export default function findNextEmpty(gameBoard:(number|number)[][]){
    for (let i = 0 ; i < gameBoard.length ; i++){
        for (let j = 0 ; j < gameBoard[i].length ; j++){
            let cell = gameBoard[i][j] as string|number;
            console.log(cell);
            if(cell === ' '){
                return [i,j];
            }
        }
    }
}