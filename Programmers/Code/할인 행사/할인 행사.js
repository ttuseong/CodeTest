function solution(want, number, discount) {
    var answer = 0;
    
    for(var i = 0; i  < discount.length - 9; i++){
        var arr = discount.slice(i, i + 10);
        var check = true;
        
        for(var j = 0; j < want.length; j++){
            var count = arr.filter(f => f == want[j]).length;
            
            if(count != number[j]){
                check = false;
                break;
            }
        }
        
        if(check == true){
            answer++;
        }
    }
    
    return answer;
}