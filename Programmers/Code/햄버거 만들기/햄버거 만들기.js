function solution(ingredient) {
    var answer = 0;
    var arr = [];
    
    for(var i = 0; i < ingredient.length; i++){
        arr.push(ingredient[i]);
        
        if(arr.length < 4){
            continue;
        }
        
        if(arr[arr.length - 1] != 1 || arr[arr.length - 2] != 3
           || arr[arr.length - 3] != 2 || arr[arr.length - 4] != 1){
            continue;
        }
        
        for(var j = 0; j < 4; j++){
            arr.pop();
        }
        
        answer++;
    }
    
    
    return answer;
}