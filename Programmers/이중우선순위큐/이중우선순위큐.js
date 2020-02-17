function solution(operations) {
    var answer = [];
    var arr = [];
    
    for(var i = 0; i < operations.length; i++)
    {
        arr = operations[i].split(' ');
        
        if(arr[0] == 'I')
        {
            answer.push(arr[1]);
            answer.sort(function (a, b){
                return b - a;
            })   
        }
        else if(arr[0] == 'D')
        {
            if(arr[1] == "1")
            {
                answer.shift();
            }
            else if(arr[1] == "-1")
            {
                answer.pop();
            }
        }
    }
    
    if(answer.length != 0)
    {
        return [answer[0] * 1, answer[answer.length-1] * 1];
    }
    else
    {
        return [0, 0]
    }
}