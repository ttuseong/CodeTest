function solution(s) {
    var answer = [];
    
    var arr = s.slice(2, -2).split("},{").map(m => m.split(",").map(ma => Number(ma))).sort((a, b) => a.length- b.length);
    
    for(var i = 0; i < arr.length; i++){
        answer.push(...arr[i].filter(f => answer.includes(f) == false))
    }
    
    return answer;
}