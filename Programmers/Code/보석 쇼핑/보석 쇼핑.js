function solution(gems) {
    var answer = [];
    var length = new Set(gems).size;
    var map = new Map();
    
    for(var i = 0; i < gems.length; i++){
        map.delete(gems[i]);
        map.set(gems[i], i + 1);
        
        if(map.size == length){
            answer.push([map.values().next().value, i + 1])
        }
    }
    
    answer.sort(function(a, b){
        if(a[1] - a[0] == b[1] - b[0]){
            return a[1] - b[1];
        }
        
        return a[1] - a[0] - b[1] + b[0];
    });

    return answer[0];
}