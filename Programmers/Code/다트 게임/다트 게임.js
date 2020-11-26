function solution(dartResult) {
    var answer = 0;
    var arr = [];
    var temp;
    
    for(var i = 0; i < dartResult.length; i++){
         temp = dartResult[i];
        
        while(!isNaN(dartResult[i + 1]) && !isNaN(dartResult[i])){
            temp += dartResult[i + 1];
            i++;
        }
        
        
        switch(temp){
            case 'S':
                temp = arr.pop() * 1
                break;
            case 'D':
                temp = Math.pow(arr.pop(), 2);
                break;
            case 'T':
                temp = Math.pow(arr.pop(), 3);
                break;
            case '*':
                if(arr.length >= 2){
                    temp = arr.pop()*2; 
                    arr.push(arr.pop()*2);
                } else{
                    temp = arr.pop()*2
                }
                break;
            case '#':
                temp = arr.pop() * -1;
                break;
        }
        arr.push(temp);
    }
    
    for(var i = 0; i < arr.length; i++){
        answer += arr[i];
    }
    
    return answer;
}