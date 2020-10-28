function solution(progresses, speeds) {
    var arr =  Array.apply(null, new Array(100)).map(Number.prototype.valueOf,0);
    var count = 0;
    var answer = [];
    
    for(var i= 0; i < progresses.length; i++)
        {
            while(progresses[i]+speeds[i]*count<100)
                {
                    count++;
                }
            arr[count]++;
        }
    
    answer = arr.filter(function(n){
        return n!=0
    })
    return answer;
}