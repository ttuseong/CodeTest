function solution(n) {
    var answer = n;
    var oneCount = n.toString(2).match(/1/gi, "").length;
    
    while(true){
        answer++;   
        
        if(answer.toString(2).match(/1/gi, "").length == oneCount){
            return answer;
        }
    }
}