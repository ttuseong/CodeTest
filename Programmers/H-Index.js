function solution(citations) {
    var answer = 0;
    
    citations.sort(function(a, b) {
        return b-a;
    })
    
    if(citations[citations.length-1] >= citations.length)
        return citations.length;
    
    for(var i = 0; i < citations.length; i++)
    {
        if(citations[i]<i+1)
           return i;
    }
}