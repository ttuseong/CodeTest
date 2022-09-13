function solution(n) {
    var answer = 0;
    for(var i = 1; i <= n; i++){
        var sum = 0;
        
        for(var j = i; j <= n; j++){
            sum += j;
            
            if(n <= sum){
                if(n == sum){
                    answer++;
                }
                
                break;
            }
        }
    }
    
    return answer;
}