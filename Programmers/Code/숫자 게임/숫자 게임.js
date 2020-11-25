function solution(A, B) {
    var answer = 0;
    var aHead = 0, bHead = 0, bTail = B.length;
    
    A.sort(function(a, b){
        return b - a;
    });
    
    B.sort(function(a, b){
        return b - a;
    });
    
    while(bHead != bTail){
        if(A[aHead] < B[bHead]){
            answer++;
            bHead++;
        } else{
            bTail--;
        }
        
        aHead++;;
    }
    
    return answer;
}