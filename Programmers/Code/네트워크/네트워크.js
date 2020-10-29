function solution(n, computers) {
    var answer = 0;
    
    for(var i = 0; i < n; i++){
        if(computers[i][i] == 1){
            computers[i][i] = 0;
            answer++;
        }
        compute(i);
    }
    
    function compute(index){
        for(var i = 0; i < n; i++){
            if(computers[index][i] == 1){
                computers[index][i] = 0;
                compute(i);
            }
        }
    }
    
    return answer;
}