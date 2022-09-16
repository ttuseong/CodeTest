function solution(stones, k) {
    var left = 1;
    var right = 200000000;
    
    while(left <= right){
        var mid = Math.floor((left + right) / 2);
        var count = 0;
        
        for(var i = 0; i < stones.length; i++){
            count = stones[i] - mid <= 0 ? count + 1 : 0;
            
            if(count == k){
                break;
            }
        }
        
        if(count == k){
            right = mid - 1;
        } else{
            left = mid + 1;
        }
    }
    
    return left;
}