function solution(n, times) {
    times.sort(function(a, b){
        return a - b;
    });
    
    var left = 0;
    var right = times[times.length - 1] * n;
    var answer = right;
    
    while(left <= right){
        var mid = Math.floor((left + right)/2);
        var count = 0;
        for(var i = 0; i < times.length; i++){
            count += Math.floor(mid/times[i]);
            if(count >= n){
            	answer = Math.min(answer , mid);
            }
        }
        
        if(count < n){
            left = mid + 1;
        } else{
            right = mid - 1;
        }
    }
    
    return answer;
}