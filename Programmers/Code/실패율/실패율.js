function solution(N, stages) {
    var arr = [];
    var count = 0;
    var temp;
    
    for(var i = N + 1; i > 0; i--){
        arr.push( {'fail' : isNaN(temp = stages.filter(function(a){
            if(i == N+1 && a == N+1){
                count++;
                return;
            }else if(a == i){
                count++;
                return true;
            }
                
        }).length/count) ? 0 : temp, 'index' : i})
    }
    
    arr.shift();
    
    return arr.sort(function(a, b){
        if(a.fail == b.fail)
            return a.index - b.index;
        return b.fail - a.fail;
    }).map(function(a){
        return a.index;
    });
}