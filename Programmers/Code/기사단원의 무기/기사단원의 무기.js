function acc(number){
    var count = 0;
    for (var i = 1; i <= Math.sqrt(number); i++) {
	    if (i * i == number){
            count++;
        }
	    else if (number % i == 0){
            count += 2;
        }
    }
    
    return count;
}

function solution(number, limit, power) {
    var answer = [];
    for(var i = 1; i <= number; i++){
        var count = acc(i);
        
        answer.push(count <= limit ? count : power);
    }
    
    return answer.reduce((acc, val) => acc + val);
}