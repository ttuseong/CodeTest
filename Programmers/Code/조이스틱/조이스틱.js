function solution(name) {
    var answer = 0;
    var left = 0;
    var right = 0;
    
    for(var i = 0 ; i < name.length; i++){
        if(name.charCodeAt(i) - 65 == 0){
            if(i < name.length/2.0){
                left++;
            } else{
                right++;
            }
        }
    }
    
    answer += fc(name.charCodeAt(0));
    
    if(left <= right){
        for(var i = 1; i < name.length; i++){
            if((i==name.length-1&&name.charCodeAt(i)==65)){
                answer++;    
            }
            
            answer++;
            answer += fc(name.charCodeAt(i));
        }
    } else{
        for(var i = name.length-1; i > 0; i--){
            if((i==1&&name.charCodeAt(i)==65)){
                answer++;    
            }
            
            answer += fc(name.charCodeAt(i));
        }
    }
    
    return answer;
}

function fc(a){
    if(a <= 78){
        return a-65;
    } else{
        return 90-a+1;
    }
}