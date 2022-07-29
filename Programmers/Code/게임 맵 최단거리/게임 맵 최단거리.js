function solution(maps) {
    var arr = [];
    var row = maps.length;
    var col = maps[0].length;
    
    arr.push([0, 0, 1]);
    
    while(arr.length > 0){
        var now = arr.shift();
        
        // 도착하면 종료
        if(now[0] == row - 1 && now[1] == col - 1){
            return now[2];
        }
        
        if(1 == maps[now[0]][now[1]]){
            maps[now[0]][now[1]] = 0;

            //arr에 위 아래 값 추가
            if(0 <= now[0] - 1  && maps[now[0] - 1][now[1]]){
                arr.push([Number(now[0]) - 1, now[1], Number(now[2]) + 1]);
            }
                         
                         
            if(now[0] + 1 < row && maps[now[0] + 1][now[1]]){

                arr.push([Number(now[0]) + 1, now[1], Number(now[2]) + 1]);
            }
                         
        
            if(0 <= now[1] - 1 && maps[now[0]][now[1] - 1]){
                arr.push([now[0], Number(now[1]) - 1, Number(now[2]) + 1]);
            }
            
            if(now[1] + 1 && maps[now[0]][now[1] + 1]){
                arr.push([now[0], Number(now[1]) + 1, Number(now[2]) + 1]);
            }
            
        }
    }
    
    return -1;
}