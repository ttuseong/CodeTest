function solution(number, k) {
    var answer = '';
    var maxNumber = number[0];
    var maxIndex = 0;
    var lastAnswer;
    
    if(k == 0)
    {
        return number;
    }
    
    for(var i = 1; i - k <= 0; i++)
    {
        if(maxNumber < number[i])
        {
            maxNumber = number[i];
            maxIndex = i;
        }
    }
    
    if(answer.length < number.length - k)
    {
        
        lastAnswer = solution(number.substring(maxIndex+1), k - maxIndex);
        if(typeof lastAnswer == "undefined")
        {
            return maxNumber.replace("undefined", ""); 
        }
        else
        {
            return maxNumber.concat(lastAnswer);
        }
    }
}