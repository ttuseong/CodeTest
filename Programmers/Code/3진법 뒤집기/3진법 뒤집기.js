function solution(n) {
    var answer = 0;
    var temp = '';
    
    while(n > 0){
        temp = (n%3) + temp;
        n = Math.floor(n/3);
    }
    
    temp = temp.split("").reverse(); 
    
    for(var i = 0; i < temp.length; i++){
        answer = answer + temp[temp.length - 1 -i] * Math.pow(3, i);
    }
    
    return answer;
}