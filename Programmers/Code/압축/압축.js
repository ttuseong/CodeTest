function solution(msg) {
    var answer      = [];
    var arr         = [];
    var startPoint  = 0;
    var endPoint    = 1;
    
    for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
        arr.push(String.fromCharCode(i));
    }
    
    while(startPoint < msg.length){
        endPoint = 1;
        
        while(arr.includes(msg.substr(startPoint, endPoint)) == true && startPoint + endPoint <= msg.length){
            endPoint++;
        }
             
        if(endPoint != 1){
            arr.push(msg.substr(startPoint, endPoint));
        } else{
            endPoint = 2
        }
        
        answer.push(arr.indexOf(msg.substr(startPoint, endPoint - 1)) + 1);
        startPoint = startPoint + endPoint - 1;
    }
    
    return answer;
}