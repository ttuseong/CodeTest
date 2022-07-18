function solution(k, dungeons) {
    var answer = 0;
    
    function fatigability(currentFatigability, arr){
        var afterFatigability = 0
        
        for(var i = 0; i < dungeons.length; i++){
            if(arr[i] == true){
                answer = Math.max(answer, arr.filter(e => e == true).length);
                continue;
            }
            
            if(currentFatigability - dungeons[i][0] < 0){
                answer = Math.max(answer, arr.filter(e => e == true).length);
                continue;
            }
            
            afterFatigability = currentFatigability - dungeons[i][1];
            arr[i] = true;
            
            fatigability(afterFatigability, arr)
            
            arr[i] = false;
        }
    }
    
    fatigability(k, [], 0)
    
    return answer;
}