function solution(a, b, n) {
    var answer = 0;
    
    while(1 <= n/a) {
        var share = Math.floor(n/a);
        n = (share * b) + (n % a);
        answer += (share * b);
    }
    
    return answer;
}