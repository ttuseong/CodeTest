function solution(n, s) {
    var answer = new Array(n);
    
    var quotient = Math.floor(s / n);
    var remainder = s % n;
    
    if(quotient == 0){
        return [-1];
    }
    
    answer.fill(quotient);
    
    for(var i = 0; i < remainder; i++){
        answer[answer.length - 1 - i]++;
    }
    
    return answer;
}