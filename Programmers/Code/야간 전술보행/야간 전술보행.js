function solution(distance, scope, times) {
    
    for(var i = 0; i < scope.length; i++){
        scope[i].sort((a, b) => a - b);
    }

    for(var i = 1; i <= distance; i++){
        for(var j = 0; j < scope.length; j++){
            if(!(scope[j][0] <= i && i <= scope[j][1])){
                continue;
            }
            
            var time = times[j][0] + times[j][1];
            
            if((i % time <= times[j][0]) && (i % time != 0)){
                return i;
            }
        }
    }
}