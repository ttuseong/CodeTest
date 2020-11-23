function solution(n, m) {
    var answer = [];
    
    GCD(n, m);
    
    function GCD(a, b){
        var temp;
        while(b){
            temp = a % b;
            a = b;
            b = temp;
        }
        answer.push(a);
        answer.push(n*m/a);
    }
    
    return answer;
}