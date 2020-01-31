function solution(n, lost, reserve) {
    var answer = 0;
    
    for(var i = 0; i < lost.length; i++)
    {
        if(reserve.includes(lost[i]))
        {
            
            reserve.splice(reserve.indexOf(lost[i]), 1);  
            lost.splice(i, 1);
            i--;
        }
    }
    
    for(var i = 1; i <= n; i++)
    {
        if(lost.includes(i))
        {
            if(reserve.includes(i - 1))
            {
                reserve.splice(reserve.indexOf(i - 1), 1);
                answer++;
                continue;
            }
                
            else if(reserve.includes(i + 1))
            {
                reserve.splice(reserve.indexOf(i + 1), 1);
                answer++;
                continue;
            }
                
        }
        else
            answer++;
    }
    
    return answer;
}