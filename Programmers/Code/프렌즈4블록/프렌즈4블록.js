function solution(m, n, board) {
    var arr = [];
    board = board.map((v) => v.split(""));
    
    while(true){
        for(var i = 0; i < m - 1; i++){
            for(var j = 0; j < n - 1; j++){
                if(board[i][j] == 0){
                    continue;
                }
                
                if(board[i][j] == board[i][j + 1] &&
                    board[i][j] == board[i + 1][j] &&
                    board[i][j] == board[i + 1][j + 1]){
                    
                    arr.push([i, j]);
                }
            }
        }
        
        if(arr.length == 0){
            break;
        }
        
        while(0 < arr.length){
            var item = arr.pop();
            
            board[item[0]][item[1]] = 0;
            board[item[0]][item[1] + 1] = 0;
            board[item[0] + 1][item[1]] = 0;
            board[item[0] + 1][item[1] + 1] = 0;
        }
        
        for(var i = m - 1; 0 < i; i--){
            for(var j = 0; j < n; j++){
                if(board[i][j] != 0){
                    continue;
                }
                
                for(var k = i - 1; 0 <= k; k--){
                    if(board[k][j] == 0){
                        continue;
                    }
                    
                    board[i][j] = board[k][j];
                    board[k][j] = 0;
                    break;
                }
            }
        }
    }
    
    return board.reduce((acc, cur) => acc.concat(cur)).filter((f) => f == 0).length;
}