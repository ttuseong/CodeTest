function solution(s) {
    var answer = [];
    var map = new Map();
    
    for(var i = 0; i < s.length; i++){
        var item = map.get(s[i]);
        
        if(item == undefined){
            answer.push(-1);
        } else{
            answer.push(i - item);
        }
        
        map.set(s[i], i);
    }
    
    return answer;
}