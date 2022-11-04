function solution(n, wires) {
    var answer = n-2;

    var map = wires.reduce((prev, cur) => {
        prev.set(cur[0], prev.get(cur[0]) ? [...prev.get(cur[0]), cur[1]] : [cur[1]]);
        prev.set(cur[1], prev.get(cur[1]) ? [...prev.get(cur[1]), cur[0]] : [cur[0]]);
        return prev;
    }, new Map());
    
    for(var i = 0; i < wires.length; i++){
        answer = Math.min(check(wires[i]), answer);
    }
    
    function check(wire){
        var set = new Set();
        set.add(wire[0])
    
        for (let value of set){
            map.get(value).forEach(v => {
                    if(v != wire[1]){
                        set.add(v);
                    }
                }
            );
        }        
        
        return Math.abs(n - set.size * 2);
    }
    
    return answer;
}