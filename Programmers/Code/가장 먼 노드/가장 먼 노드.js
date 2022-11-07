function solution(n, edge) {
    var arr = new Array(n).fill(0);
    var queue = [0];
    const graph = Array.from(Array(n), () => []);
    
    arr[0] = 1;
    
    for (const [src, dest] of edge) {
        graph[src - 1].push(dest - 1)
        graph[dest - 1].push(src - 1)
    }
    
    while(queue.length != 0){
        var val = queue.shift();       
        var item = graph[val]
        
        for(var i = 0; i < item.length; i++){
            if(arr[item[i]] == 0){
                arr[item[i]] = arr[val] + 1;
                queue.push(item[i]);
            }
        }
    }
    
    
    return arr.filter(x => x === Math.max(...arr)).length;
}