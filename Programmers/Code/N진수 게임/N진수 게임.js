function solution(n, t, m, p) {
    var answer = [];
    var string = "";
    var number = 0;
    
    while(string.length < (t * m)){
        string += (number++).toString(n).toUpperCase();
    }
    
    for(var i = 0; i < t; i++){
        answer.push(string[(p - 1) + i * m ]);
    }
    
    return answer.join("");
}