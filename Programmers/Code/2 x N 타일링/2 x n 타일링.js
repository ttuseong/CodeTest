function solution(n) {
    var arr = new Array(n);
    arr[0] = 1;
    
    for(var i = 1; i < n; i++){
        
        if(i == 1){
            arr[1] = 2;
        } else{
            arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
        }
    }

    
    return arr[n - 1];
}