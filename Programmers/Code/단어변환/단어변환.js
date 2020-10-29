function solution(begin, target, words) {
    var answer = 51;
    
    compute(begin, 0);
    
    function compute(currentWord, count){
        if(currentWord == target && count < answer){
            answer = count;
            return;
        }
        for(var i = 0; i < words.length; i++){
            var check = 0;
            for(var j = 0; j < currentWord.length; j++){
                
                if(words[i][j] == currentWord[j]){
                    check++;
                }
            }
            if(check == currentWord.length-1){
                currentWord = words[i];
                words.splice(i, 1);
                compute(currentWord, ++count);
                i--;
            }
            
            check = 0;
        }
    }
    
    if(answer == 51){
        return 0;
    } else{
        return answer;
    }
}