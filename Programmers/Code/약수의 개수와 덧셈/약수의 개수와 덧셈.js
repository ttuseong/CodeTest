function solution(left, right) {
    var answer = 0;
    
    for(; left <= right; left++){
        var count = 0;
        for(var i = 1; i <= left; i++){
            if (left % i == 0) {
                count++;
            }    
        }
                
        if(count % 2 == 0){
            answer += left;
        }else{
            answer -= left;
        }
    }
    
    return answer;
}