function solution(s) {
    var answer = s.length;

    for(var i = 1; i <= s.length / 2; i++){
        var tempString = s.substr(0, i);
        var count = 1;
        var string = "";
        
        for(var j = i; j < s.length; j += i){                     
            var nextString = s.substr(j, i);
                  
            if(tempString == nextString){
                count++;
            }else{
                count == 1 ? string += tempString : string += count + tempString;
                
                count = 1;
                tempString = nextString;
            }
        }
        
        count == 1 ? string += tempString : string += count + tempString
            
        answer = Math.min(answer, string.length)
    }
    
    return answer;
}