function solution(answers) {
    var answer = [];
    var arr = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    var score = [0,0,0];
    
    
    for(var i = 0; i < 3; i++)
    {
        for(var j = 0; j < answers.length; j++)
        {
            if(answers[j] == arr[i][j%arr[i].length])
            {
                score[i]++;
            }
        }
        
    }
    
    var max = Math.max.apply(null, score);
    
    for(var i = 0; i < 3; i++)
    {
        if(score[i] == max)
        {
            answer.push(i+1);
        }
    }
    
    return answer;
}