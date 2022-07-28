function solution(rows, columns, queries) {
    var answer = [];
    var arr = [];
    var procession = new Array(rows);
    
    // rows * columns 행렬 생성
    for(var i = 0; i < rows; i++){
        procession[i] = new Array(columns).fill(0)
    }
    
    // 행렬에 값 순서대로 입력
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            procession[i][j] = i * columns + j + 1;
        }
    }
    
    for(var i = 0; i < queries.length; i++){
        var [x1, y1, x2, y2] = queries[i];
        
        //위, 오른쪽, 아래, 왼쪽 순으로 값 저장 위에서 가장 왼쪽의 값은 오른쪽 값을 넣을 때 들어갑니다.
        for(var j = y1; j < y2; j++){
            arr.push(procession[x1 - 1][j - 1]);
        }
        
        for(var j = x1; j < x2; j++){
            arr.push(procession[j - 1][y2 - 1]);
        }
        
        for(var j = y2; y1 < j; j--){
            arr.push(procession[x2 - 1][j - 1])
        }
        
        for(var j = x2; x1 < j; j--){
            arr.push(procession[j - 1][y1 -  1]);
        }
        
        // 가장 작은 값 저장
        answer.push(Math.min.apply(null, arr));
        
        // 저장했던 순서와 동일하게 행렬 값 변경
        for(var j = y1; j < y2; j++){
            procession[x1 - 1][j] = arr.shift();
        }
        
        for(var j = x1; j < x2; j++){
            procession[j][y2 - 1] = arr.shift();
        }
        
        for(var j = y2; y1 < j; j--){
            procession[x2 - 1][j - 2] = arr.shift();
        }
        
        for(var j = x2 - 1; x1 - 1 < j; j--){
            procession[j - 1][y1 - 1] = arr.shift();
        }
    }
    
    return answer;
}