function solution(n) {  
    var arr = Array.from({length: n + 1}, () => true).fill(false, 0, 2);;

    for(var i = 2 ; i * i <= n; i++){
        if(arr[i]){
            for(var j = i * i; j <= n; j+=i){
                arr[j] = false;
            }
        }
    }
    
    return arr.filter(f => f == true).length;
}