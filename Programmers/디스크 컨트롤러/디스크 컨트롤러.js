function solution(jobs) {
    var answer = 0;
    var arr = [];
    var completeTime = 0;
    var sumJobTime  = 0;
    var divValue = jobs.length;
    
    jobs.sort((a, b) => b[0] - a[0]);
    
    while(jobs.length != 0)
    {
        for(var i = 0; i < jobs.length; i++)
        {
            if(sumJobTime  >= jobs[i][0])
            {
                arr.push(jobs.pop());
                i--;
                
            }
        }
        if(arr.length > 0)
        {
            arr.sort((a, b) => b[1] - a[1]);
          
            completeTime = sumJobTime + arr[arr.length - 1][1] - arr[arr.length - 1][0];
            sumJobTime  += arr[arr.length - 1][1];
            answer += completeTime;
            arr.pop();  
        }
        else
        {
            sumJobTime++;
        }
        
        
    }
    
    while(arr.length)
    {
        completeTime = sumJobTime + arr[arr.length - 1][1] - arr[arr.length - 1][0];
        sumJobTime  += arr[arr.length - 1][1];
        answer += completeTime;
        arr.pop();  
    }
    
    
    
    return Math.floor(answer /= divValue);
}