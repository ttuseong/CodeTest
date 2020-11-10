function solution(s) {
    var answer = [];
    var zeroCount = 0;
    var loopCount = 0;
    
    while(s != '1'){
        var temp = s.replace(/0/gi,'');
    
        zeroCount += s.length - temp.length;
        loopCount++;
        
        s = (temp.length).toString(2);
    }
    
    answer.push(loopCount);
    answer.push(zeroCount);
    
    return answer;
}