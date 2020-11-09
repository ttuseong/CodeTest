function solution(arr1, arr2) {
    var answer = new Array(arr1.length);
    
    for(var i = 0; i < answer.length; i++){
        answer[i] = new Array(arr2[0].length);
    }
    
    for(var i = 0; i < answer.length; i++){
        for(var j = 0; j < answer[i].length; j++){
            for(var k = 0; k < arr2.length; k++){
                if(answer[i][j] == undefined){
                    answer[i][j] = 0;
                }
                answer[i][j] += (arr1[i][k] * arr2[k][j]);
            }
        }
    }
    return answer;
}