function solution(begin, end) {
    var answer = [];
    
    for(var i = begin; i <= end; i++){
        answer.push(check(i));      
    }
    
    return answer;
}

function check(i){
    if(i == 1){
        return 0;
    }
    
    for(var j = 2; j <= Math.sqrt(i); j++){
        if(i % j == 0 && i / j <= 10000000){  
            return i / j;
        }
    }
    
    return 1;
}