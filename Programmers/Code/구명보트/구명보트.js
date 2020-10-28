function solution(people, limit) {
    var answer = 0;
    
    people.sort(function(a, b) { 
        return a - b;
    });
    
    while(people.length > 1)
    {
        for(var i = 1; i < people.length; i++)
        {
            if(people[0] + people[i] > limit)
            {
                if(i - 1 == 0)
                {
                    people.splice(0, 1);
                }
                else
                {
                    people.splice(i - 1, 1);
                    people.splice(0, 1);
                    
                }
                answer++;
                break;
            }
        }
    }
    
    if(people.length == 1)
    {
        return ++answer;
    }
    else
    {
        return answer;
    }
    
        
}