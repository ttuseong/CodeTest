function solution(clothes) {
    
    var myMap = new Map();
    
    for(var i = 0; i < clothes.length; i++) {
        var key = clothes[i][1];
        if(!myMap.get(key)) myMap.set(key, 1);
        else myMap.set(key, myMap.get(key) + 1);
    }
    
    var answer = 1;
    
    for(var value of myMap.values()) {
        answer *= (value + 1); 
    }    
    return answer - 1;
}