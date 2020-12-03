function solution(n, k) {
    var answer = [];
    var arr = new Array(3);
    k--;
    
    for(var i = 1; i <= n; i++){
        arr[i-1] = i;
    }
    
    function fac(a){
        if(a == 1){
            return 1;
        } else{
            return a * fac(a-1);
        }
    }

    while(arr.length != 1){
        var facVal = fac(arr.length-1);
        var index = Math.floor(k/facVal);
        answer.push(arr[index]);
        
        k %= facVal;
        arr.splice(index, 1);
    }
    
    answer.push(arr[0]);
    
    return answer;
}