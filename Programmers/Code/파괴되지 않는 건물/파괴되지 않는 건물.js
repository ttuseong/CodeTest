function solution(board, skill) {
    var answer = 0;
    var arr = Array.from(Array(board.length + 1), ()=> Array(board[0].length + 1).fill(0));
    
    for(var i = 0; i < skill.length; i++){
        var type = skill[i][0] == 1 ? -1 : 1;
        
        arr[skill[i][1]][skill[i][2]] += type * skill[i][5];
        arr[skill[i][3] + 1][skill[i][2]] += type * skill[i][5] * -1;
        arr[skill[i][1]][skill[i][4] + 1] += type * skill[i][5] * -1;
        arr[skill[i][3] + 1][skill[i][4] + 1] += type * skill[i][5];
        
    }
    
    for(var i = 1; i < arr.length; i++){
        for(var j = 0; j < arr[0].length; j++){
            arr[i][j] += arr[i - 1][j];
        }
    }
    
    for(var i = 0; i < arr.length; i++){
        for(var j = 1; j < arr[0].length; j++){
            arr[i][j] += arr[i][j - 1];
        }
    }
    
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[0].length; j++){
            board[i][j] += arr[i][j]
            
            if(0 < board[i][j]){
                answer++;
            }
        }
    }
    
    return answer;
}