function solution(board, moves) {
    var answer = 0;
    var temp = [];
    
    for(var i = 0; i < moves.length; i++){
        for(var j = 0; j < board.length; j++){
            if(board[j][moves[i]-1] != 0){
                if(board[j][moves[i]-1] == temp[temp.length - 1] && temp.length != 0){
                    answer += 2;
                    temp.pop();
                    board[j][moves[i]-1] = 0;
                } else {
                    temp.push(board[j][moves[i]-1]);
                    board[j][moves[i]-1] = 0;
                }
                break;
            }
        }
    }
    
    return answer;
}