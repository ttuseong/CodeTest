function solution(food) {
    var left = '';
    
    for(var i = 1; i < food.length; i++){
        left += String(i).repeat(Math.floor(food[i]/2));
    }
    
    return left + "0" + [...left].reverse().join('');
}