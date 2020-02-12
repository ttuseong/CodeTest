function solution(brown, red) {
    var answer = [];
    var exbrown
    var width;
    var height;
    var roundRed = Math.round(red/2);
    
    for(var i = 1; i <= roundRed; i++)
    {
        if(red % i == 0)
        {
            width = red / i + 2;
            height = i +2;
            
            
            if(brown == (width * 2) + ((height - 2) * 2) )
            {
                answer.push(width);
                answer.push(height);
                return answer;
            }
        }
    }
    
    
}