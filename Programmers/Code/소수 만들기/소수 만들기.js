function solution(nums) {
    var answer = 0;
    
    compute(nums, 0, 0);
    
    function compute(arr, count, sum){
        if(count == 3){
            for(var i = 2; i < sum; i++){
                if(sum % i == 0){
                    return;
                }
            }
            
            answer++;
            return;
        }
        
        for(var i = 0; i < arr.length; i++){
            var temp = arr.slice();
            var num = temp.splice(i, 1)[0];
            
            compute(temp, count + 1, sum+num);
        }
    }
    
    return answer/6;
}