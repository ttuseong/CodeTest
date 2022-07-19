function solution(sizes) {
    var answer = 0;
    var temp = 0;
    
    for(var i = 0; i < sizes.length; i++){
        sizes[i].sort(function(a, b){
           return b - a; 
        });
    }
    
    answer = Math.max.apply(null, sizes.map((el) => el[0])) * Math.max.apply(null, sizes.map((el) => el[1]))
    return answer;
}