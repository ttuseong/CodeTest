function solution(n) {
    var answer = [];
    var arr = new Array(n);
    var max = 0;
    var count = 0;
    var check = 0;
    var x = 0, y = 0;
    
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(n);
        for(var j = 0; j < n; j++){
            arr[i][j] = 0;
        }
    }
    
    for(var i = 1; i <= n; i++){
        max += i;
    }
    
    while(count < max){
          switch(check){
              case 0:
                  while(true){
                      arr[x++][y] = ++count;
                      if ((arr[x] == undefined) || (arr[x][y] != 0)){
                          break;
                      }
                  }
                  x--;
                  y++;
                  check=1;
                  break;
              case 1:
                while(true){
                      arr[x][y++] = ++count;
                      if((arr[x][y] == undefined) || (arr[x][y] != 0)){
                          break;
                      }
                  }
                  x--;
                  y-=2;
                  check=2;
                  break;
              case 2:
                  while(true){
                      arr[x--][y--] = ++count;
                      if(arr[x][y] != 0){
                          break;
                      }
                  }
                  x+=2;
                  y++;
                  check=0;
                  break;
          }
    }
    
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            if(arr[i][j] == 0){
                break;
            }
            answer.push(arr[i][j]);
        }
    }

    return answer;
}