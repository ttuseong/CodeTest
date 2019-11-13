function solution(heights) {
    var answer = [];
    var temp;
    
    for(var i = 1; i <= heights.length; i++)
        {
            temp = heights[heights.length - i];
            for(var j = heights.length - i -1; j > -1; j--)
                {
                    console.log("temp : " + temp + " height : "+ heights[j]);
                    if(temp < heights[j])
                        {
                            answer.unshift(j+1);
                            break;
                        }
                    else if(j == 0)
                        {
                            answer.unshift(0);
                        }
                }
            
            if(i==heights.length)
                {
                    answer.unshift(0);
                }
        }
    
    return answer;
}