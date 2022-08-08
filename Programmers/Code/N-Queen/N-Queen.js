function solution(n) {
    var answer = 0;
    var arr = new Array(n).fill(0);
    
    for(var i = 1; i <= n; i++){
        arr[0] = i;
        search(1)
    }
    
    function search(index){
        if(index == n){
            answer++;
        }else{
            for(var i = 1; i <= n; i++){
                arr[index] = i;
                
                if(isValid(index) == true){
                    search(index + 1);    
                }
            }    
        }
        
    }
    
    function isValid(index){
        for(var i = 0; i < index; i++){
            if(arr[i] == arr[index]){
                return false;
            }
            
            if(Math.abs(arr[i] - arr[index]) === Math.abs(i - index)){
                return false;
            }
        }
        
        return true;
    }
    
    return answer;
}