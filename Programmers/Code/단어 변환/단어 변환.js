function solution(begin, target, words) {
    var arr     = [];
    var visited = [];
    
    if(words.includes(target) == false){
        return 0;
    }
    
    arr.push([begin, 0]);
    
    while(arr.length != 0){
        var item = arr.shift();
        
        if(item[0] == target){
            return item[1];
        }
        
        for(var i = 0; i < words.length; i++){
            var count = 0;
            
            if(visited.includes(words[i]) == true){
                continue;
            }
            
            for(var j = 0; j < item[0].length; j++){
                
                if(item[0][j] != words[i][j]){
                    count++;
                }
            }
            
            if(count == 1){
                arr.push([words[i], ++item[1]]);
                visited.push(words[i]);
            }
            
        }
    }
    
    return 0;
}