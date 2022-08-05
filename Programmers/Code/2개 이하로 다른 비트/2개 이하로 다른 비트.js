function solution(numbers) {
    var answer = [];
    
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            answer.push(numbers[i] + 1);
        }else{
            var str = "0" + numbers[i].toString(2);
            var idx = str.lastIndexOf('01');

            answer.push(parseInt(str.substring(0,idx) + '10' + str.substring(idx+2, str.length), 2))
        }
    }
    
    return answer;
}