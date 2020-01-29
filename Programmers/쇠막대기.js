function solution(arrangement) {
    var answer = 0;
    var arr = [];

    for(var i=0;i<arrangement.length;i++){
        if(arrangement[i] === '(')
        {
            arr.push('(');
        }
        else
       {
            arr.pop();
            if(arrangement[i-1]==='(')
            {
            answer = answer+arr.length;
            }
            else
            {
                answer = answer +1;
            }
        }
    }
    return answer;
}