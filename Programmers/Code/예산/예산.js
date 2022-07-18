function solution(d, budget) {
    var index = 0;
    var sum = 0;
    
    d.sort(function(a, b){
       return a - b;
    });
    
    for(; index < d.length; index++){
        sum += d[index];
        
        if(sum > budget) {
            break;
        }
    }
    
    return index
}