function solution(order) {
    var answer = 0;
    var stack = [];
    
    for(var i = 1; i <= order.length; i++){
       if(i == order[answer]){
            answer++;
            continue;
        }    
        
        if(i < order[answer]){
            stack.push(i);
            continue;
        }
        
        if(stack.length != 0 && stack[stack.length - 1] == order[answer]){
            answer++;
            stack.pop();
            i--;
            continue;
        }
    }

    for(var i = stack.length - 1; 0 <= i; i--){
        if(order[answer] != stack[i]){
            break;
        }
        
        answer++;
    }
    
    return answer;
}