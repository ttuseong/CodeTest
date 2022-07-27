function solution(fees, records) {
    var answer = [];
    var tempMap = new Map();
    var timeMap = new Map();
    
    for(var i = 0; i < records.length; i++){
        var arr = records[i].split(" ");
        var timeArr = arr[0].split(":");
        var time = timeArr[0] * 60 + Number(timeArr[1]);
        
        if(arr[2] == "IN"){
            tempMap.set(arr[1], time);
        }else{
            var value = timeMap.get(arr[1]);
            
            timeMap.set(arr[1], value == undefined ? time - tempMap.get(arr[1]) : time - tempMap.get(arr[1]) + value);
            tempMap.delete(arr[1]);
        }
    }
    
    for(var [key, value] of tempMap){
        timeMap.set(key, 1439 - value + (timeMap.get(key) == undefined ? 0 : timeMap.get(key)));
    }
    
    var timeArr = [...timeMap];
    
    timeArr.sort((a, b) => a[0] - b[0]);
    
    for(var i = 0; i < timeArr.length; i++){
       answer.push(fees[1] + Math.ceil((timeArr[i][1]  - fees[0] <= 0 ? 0 : timeArr[i][1]  - fees[0]) / fees[2]) * fees[3]);
    }
    
    return answer;
}