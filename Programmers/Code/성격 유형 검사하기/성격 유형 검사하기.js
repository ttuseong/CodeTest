function solution(survey, choices) {
    var answer = '';
    var arr = ['R', 'C', 'J', 'A'];
    var reverseArr = ['T', 'F', 'M', 'N'];
    var map = new Map();
    
    for(var i = 0; i < survey.length; i++){
        var key = arr.reduce((acc, val, index) => survey[i].includes(val) ? val : acc);
        var val = map.get(key);
        var score = 0;
        
        switch(choices[i]){
            case 1:
                score += 3;
                break;
            case 2:
                score += 2;
                break;
            case 3:
                score += 1;
                break;
            case 5:
                score -= 1;
                break;
            case 6:
                score -= 2;
                break;
            case 7:
                score -= 3;
                break;
        }
        
        
        score = survey[i].indexOf(key) == 0 ? score : -1 * score;
        
        if(val == undefined){
            map.set(key, score);
        }else{
            map.set(key, val + score)
        }
    }
    
    for(var i = 0; i < arr.length; i++){
        var score = map.get(arr[i]);
        
        if(score < 0){
            answer += reverseArr[i];
        } else{
            answer += arr[i];
        }
    }
    
    return answer;
}