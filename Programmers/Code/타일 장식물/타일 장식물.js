function solution(N) {
    var answer = 0, num1 = 4, num2 = 6, temp;
    
    if(N == 1)
        return num1;
    else if(N == 2)
        return num2;
    
    while(N - 2 > 0){
        answer = num1 + num2;
        N--;
        if(N - 2 > 0){
            num1 = answer;
            temp = num2;
            num2 = num1;
            num1 = temp;
        }
    }
    return answer;
}