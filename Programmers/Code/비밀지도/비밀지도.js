function solution(n, arr1, arr2) {
    var answer = [];
    
    for(var i = 0; i < n; i++){
        answer.push((arr1[i] | arr2[i]).toString(2));
        
        while(answer[i].length != n){
            answer[i] = '0'+answer[i];
        }
        
        answer[i] = answer[i].replace(/1/gi, '#');
        answer[i] = answer[i].replace(/0/gi, ' ');
    }
    
    return answer;
}