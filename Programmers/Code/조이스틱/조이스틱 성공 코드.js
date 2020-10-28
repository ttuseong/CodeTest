function solution(name) {
    var answer = 0;
    var arr = name.split("");
    
    for(var i = 0; i < arr.length; i++ ){
        if(arr[i].charCodeAt(0) <= 78){
            arr[i] = arr[i].charCodeAt(0) - 65;
        } else{
            arr[i] = 90 - arr[i].charCodeAt(0) + 1
        }
    }
    
    var index = 0;
    answer += arr[index];
    arr[0] = 0;
    
    while(true){
        var left = 0;
        var right = 0;
        var lcount, rcount;
        
        for(var i = 1; i < arr.length; i++){
            if(arr[i] != 0){
                left = i;
                break;
            }  
        }
        
        if(left == 0){
            break;
        }
        
        if(left < index){
            lcount = left + (9 - index + 1);
        } else{
            lcount = left - index
        }
        
        for(var j = 1; arr.length - j > 0; j++){
            if(arr[arr.length - j] != 0){
                right = j;
                break;
            }
        }
        
        if(arr.length - right < index){
            rcount = index - (arr.length - right); 
        } else{
            rcount = index + right;
        }
        
        if(lcount <= rcount){
            answer += (arr[left]+lcount);
            arr[left] = 0
            index = left;
        } else{
            answer += (arr[arr.length - right]+rcount);
            arr[arr.length - right] = 0;
            index = arr.length - right;
        }
    }
    
    return answer;
}