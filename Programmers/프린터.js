function solution(priorities, location) {
    var answer = 0;
    var temp;
    while(1)
        {
            temp = priorities.shift();
            location--;
            
            if(priorities.length == 0)
                {
                    answer++;
                    return answer;
                }
            
            for(var i = 0; i < priorities.length; i++)
                {
                    if(temp < priorities[i])
                        {
                            console.log(temp) ;
                            priorities.push(temp);
                            if(location == -1)
                                location += priorities.length;
                            
                            break;
                        }
                        
                    else if(i == priorities.length - 1)
                        {
                            answer++;
                            if(location == -1)
                                {
                                    return answer;
                                }
                        }
                        
                }
        }
}