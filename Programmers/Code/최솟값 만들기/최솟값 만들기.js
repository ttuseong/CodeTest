function solution(A,B){
    A.sort(function(a, b){
        return a - b;       
    });
    
    B.sort(function(a, b){
           return b - a;
    });

    return A.reduce(function(acc, cur, idx){
        return acc += cur * B[idx]
    }, 0);
    
}