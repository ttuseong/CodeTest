function solution(k, m, score) {
    var answer = 0;
    
    score.sort((a, b) => b - a);
    
    for(var i = 0; i < score.length; i = i + m){
        if(score[i + m - 1] != undefined){
            answer += score[i + m - 1] * m;
        }
    }
    
    return answer;
}