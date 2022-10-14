function solution(X, Y) {
    var answer = [];
    
    X = [...X];
    Y = [...Y];
    
    for(var i = 0; i < 10; i++){
        var countX = X.filter((item) => item == i).length;
        var countY = Y.filter((item) => item == i).length
        
        answer = answer.concat(new Array(Math.min(countX, countY)).fill(i));
    }
    
    answer = answer.sort((a, b) => b - a).join("");
    
    if (answer == "") {
        return "-1";
    } else if (answer.match(/[^0]/g) == null) {
        return "0";
    } else {
        return answer;
    }
}