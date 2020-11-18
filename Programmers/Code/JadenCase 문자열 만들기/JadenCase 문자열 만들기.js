function solution(s) {

    var answer = s.toLowerCase().split("");
    
    for(var i = 0; i < answer.length; i++){
        if(i == 0 || ((answer[i] != ' ') && (answer[i - 1] == ' '))){
            answer[i] = answer[i].replace(answer[i][0], answer[i][0].toUpperCase());
        }   
    }

    answer = answer.join('');
    return answer;
}