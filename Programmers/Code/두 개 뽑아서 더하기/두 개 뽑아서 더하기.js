function solution(numbers) {
    var answer = [];
    
    for(var i = 0; i < numbers.length; i++){
        for(var j = i+1; j < numbers.length;j++){
            answer.push(numbers[i]+numbers[j]);
        }
    }
    
    answer = answer.reduce((acc,curr) => acc.includes(curr) ? acc : [...acc,curr],[]);
    
    answer.sort(function(a, b){
        return a - b;
    })
    
    return answer;
}