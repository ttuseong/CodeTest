function solution(n, k) {
    var arr = n.toString(k).split('0');
    
    return arr.filter(f => f != '' && checkPrime(Number(f))).length;
}

function checkPrime(number){   
    if(number == 1){
        return false;
    }
    
    for(var i = 2; i <= Math.sqrt(number); i++){
        if(number % i == 0){
            
            return false;
        }
    }
    
    return true;
}