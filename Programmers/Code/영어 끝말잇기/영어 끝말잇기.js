function solution(n, words) {
    var answer = [];
    var map = new Map();
    var check;
    
    map.set(words[0][0], [words[0]]);
    
    for(var i = 1; i < words.length; i++){
        if(words[i][0] != words[i-1][words[i-1].length-1] || i == 0){
            check = i;
            break;
        }
        
        if(map.get(words[i][0]) == undefined){
            map.set(words[i][0], [words[i]]);
        } else{
            var temp = map.get(words[i][0]);
            
            if(temp.includes(words[i])){
                check = i;
                break;
            } else{
                temp.push(words[i]);
                map.set(words[i][0], temp);
            }
        }
    }

    if(check == undefined){
        answer.push(0);
        answer.push(0);
    } else{
        answer.push(check % n + 1);
        answer.push(Math.floor(check / n + 1));
    }
    
    return answer;
}