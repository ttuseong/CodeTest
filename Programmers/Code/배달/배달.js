function solution(N, road, K) {
    var arr = Array(N).fill(500001);
    var lines = Array.from(Array(N), () => []);
    
    road.forEach((value) =>{
        var [a, b, c] = value;
        lines[a - 1].push([b-1, c]);
        lines[b - 1].push([a-1, c]);
    })
    
    var queue = [[0, 0]];
    arr[0] = 0;
    
    while(queue.length != 0){
        var item = queue.pop();
        
        lines[item[0]].forEach((next) =>{
           if(arr[next[0]] > arr[item[0]] + next[1]){
               arr[next[0]] = arr[item[0]] + next[1];
               queue.push(next);
           } 
        });
    }
    
    return arr.filter((item) => item <= K).length
}