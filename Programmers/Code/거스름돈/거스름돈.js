function solution(n, money) {
    var arr = new Array(n + 1).fill(0);
    arr[0] = 1;
    
    for(var i = 0; i < money.length; i++){
        for(var j = money[i]; j < n + 1; j++){
            arr[j] = arr[j] + arr[j - money[i]]
        }
    }

    return arr[n] % 1000000007;
}