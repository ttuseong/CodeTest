function solution(numbers, target) {
    var answer = 0;
    
    Calculation(0,-1);
    
    function Calculation(sum, index){
        index++;
        if(index == numbers.length){
            if(sum == target)
                answer++;
            return;
        }
        
        Calculation(sum+numbers[index], index);
        Calculation(sum-numbers[index], index);
    }
    
    return answer;
}