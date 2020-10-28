function solution(number, k) {
    var answer = '';
    var index = -1;
    
    for(var i = 0; i < number.length - k; i++){
        var max = 0;
    
        for(var j = index+1; j < k+i+1; j++){
            if(number[j] == 9){
                index = j;
                max = number[j];
                break;
            }
            if (max < number[j]) {
                index = j;
                max = number[j];
            } 
        }
        answer += max;
    }
    
    return answer;
}