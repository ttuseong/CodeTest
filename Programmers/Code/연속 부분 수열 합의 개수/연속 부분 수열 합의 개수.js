function solution(elements) {
    var length = elements.length;
    var set = new Set();
    
    for(var i = 0; i < length - 1; i++){
        elements.push(elements[i]);
    }
    
    for(var i = 1; i <= length; i++){
        for(var j = 0; j < length; j++){
            set.add(elements.slice(j, j + i).reduce((acc, val) => acc + val));
        }
    }
    
    return set.size;
}