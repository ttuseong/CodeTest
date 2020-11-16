function solution(n) {
    var answer = 0;
    
    for(var i = 1; i <= n; i++){
        var temp = i;
        var count = i;
        
        while(true){
            if(count == n){
                answer++;
                break;
            } else if(count > n){
                break;
            }
            
            count += (++temp);
        }
    }
    
    return answer;
}