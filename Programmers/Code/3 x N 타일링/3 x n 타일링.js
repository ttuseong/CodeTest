function solution(n) {
    var answer = new Array(n + 1);
    
    if(n % 2 == 1){
        return 0;
    }
    
    answer[2] = 3
    
    for(var i = 4; i <= n; i+=2){
        if(i == 4){
            answer[4] = 11;
        } else{
            answer[i] = (answer[i - 2] * 4 - answer[i - 4])  % 1000000007 ;
        }
    }
    return answer[n];
}