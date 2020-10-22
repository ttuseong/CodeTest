function solution(people, limit) {
    var answer = 0;
    var index = people.length - 1;
    
    people.sort(function(a, b) { 
        return a - b;
    });
    
    for(var i = 0; i <= index; i++, answer++){
        while(index > i && people[i] + people[index--] > limit) {
            answer++;
        }
            
    } 
        
    return answer;
}