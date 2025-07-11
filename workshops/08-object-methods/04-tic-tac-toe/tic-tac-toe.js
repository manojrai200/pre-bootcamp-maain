// YOUR CODE BELOW

let ticTacToe = {
    board: [[null, null, null],[null, null, null],[null, null, null]],
    move: function(char, row, column){
        if(ticTacToe.board[row][column] === null){
        ticTacToe.board[row][column] = char;
        }
        return ticTacToe.board;
    },

    clear: function(){
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(ticTacToe.board[i][j] !== null){
                    ticTacToe.board[i][j] = null;
                }

            }
        }
        return ticTacToe.board;
    }
}

