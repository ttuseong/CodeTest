function solution(topping) {
    var answer = 0;
    var map = new Map();
    
    for(var i = 0; i < topping.length; i ++){
        if(map.has(topping[i]) == true){
            var item = map.get(topping[i]);
            item[0]++;
            
            map.set(topping[i], item);
        } else{
            map.set(topping[i], [1, false]);
        }
    }
    
    var arr = [0, map.size];
    
    for(var i = 0; i < topping.length; i++){
        var item = map.get(topping[i]);
        
        item[0]--;
        
        if(item[0] == 0){
            arr[1]--;
        }
        
        if(item[1] == false){
            item[1] = true;
            arr[0]++;
        }
        
        if(arr[0] == arr[1]){
            answer++;
        }
        
        map.set(topping[i], item);
    }
    
    return answer;
}