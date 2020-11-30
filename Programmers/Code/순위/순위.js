function solution(n, results) {
    var answer = 0;
    var arr = [];
    
    for(var i = 0; i < n; i++){
        arr[i] = new Array();
        for(var j = 0; j < n; j++){
            arr[i][j] = 0;
        }
    }
    
    for(var i = 0; i < results.length; i++){
        arr[results[i][0]-1][results[i][1]-1] = 1;
        arr[results[i][1]-1][results[i][0]-1] = -1;
    }
    
    for(var k = 0; k < n; k++){
        for(var i = 0; i < results.length; i++){
            for(var j = 0; j < n; j++){
                if(arr[results[i][1]-1][j] == 1){
                    arr[results[i][0]-1][j] = 1
                }

                if(arr[results[i][0]-1][j] == -1){
                    arr[results[i][1]-1][j] = -1
                }

            }
        }
    }
    
    for(var i = 0; i < n; i++){
        var count = 0;
        for(var j = 0; j < n; j++){
            if(arr[i][j] == 0){
                count++;
            }
        }
        
        if(count == 1){
            answer++;
        }
    }
    
    return answer;
}