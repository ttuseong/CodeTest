function solution(tickets) {
    var answer = [];
    var visited = new Array(tickets.length);
    compute("ICN", []);
    function compute(target, arr){  
        arr.push(target);
        
        if(arr.length == tickets.length+1){
            answer = arr;
            return true;
        }
        
        var temp = [];
        
        for(var i = 0; i < tickets.length; i++){
            if(target == tickets[i][0]&& visited[i] != true){
                temp.push([tickets[i][1], i]);
            }
        }
        
        temp.sort();
        
        for(var i = 0; i < temp.length; i++){
            visited[temp[i][1]] = true;
            var tempArr = [];
            tempArr = tempArr.concat(arr);
            var check = compute(temp[i][0], tempArr);
            if(check){
                return true;
            }
            visited[temp[i][1]] = false; 
        }
    }
    
    return answer;
}