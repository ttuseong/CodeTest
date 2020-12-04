function solution(n) {
    var answer = 0;
    var num1 = 1, num2 = 1;
    
    for(var i = 0; i < n; i++){
        if(n == 1){
            return 1;
        }
        
        var temp = (num1 + num2) % 1234567;
        
        num1 = num2;
        num2 = temp;
    }
    
    return num1;
}