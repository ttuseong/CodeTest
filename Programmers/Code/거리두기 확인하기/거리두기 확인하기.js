function check(place){
    var dx = [-1, 1, 0, 0];
    var dy = [0, 0, -1, 1];
    var arr = [];
    
    for(var i = 0; i < 5; i++){
        for(var j = 0; j < 5; j++){
            if(place[i][j] == 'P'){
                arr.push([i, j]);
            }
        }
    }
    
    while(0 < arr.length){
        var [x, y] = arr.pop();
        
        for(var i = 0; i < 4; i++){
            var moveX = x + dx[i];
            var moveY = y + dy[i];
            
            if(moveX < 0 || 4 < moveX || moveY < 0 || 4 < moveY){
                continue;
            }
            
            if(place[moveX][moveY] == 'P'){
                return 0;
            }
            
            if(place[moveX][moveY] == 'X'){
                continue;
            }
            
            for(var j = 0; j < 4; j++){
                var nextX = moveX + dx[j];
                var nextY = moveY + dy[j];
                
                if(nextX < 0 || 4 < nextX || nextY < 0 || 4 < nextY){
                    continue;
                }   
                
                if(nextX == x && nextY == y){
                    continue;
                }
                
                if(place[nextX][nextY] == 'P'){
                    return 0;
                }
            }
        }
    }
        
    return 1;
}


function solution(places) {
    var answer = [];    
    for(var i = 0; i < 5; i++){
        answer.push(check(places[i]))
    }
    
    return answer;
}