function solution(record) {
    var answer = [];
    var map = new Map();
    var arr = [];
    
    // uid 기준 최종 닉네임 저장
    for(var i = 0; i < record.length; i++)
    {
        arr = record[i].split(" ");
        
        if (arr[0] == ("Enter") || arr[0] == ("Change"))
        {
            map.set(arr[1], arr[2]);
        }
    }
    
    //record 순서대로 answer에 기록
    for(var i = 0; i < record.length; i++)
    {
        arr = record[i].split(" ");      
        
        if(arr[0] == "Enter")
        {
            answer.push(map.get(arr[1]) + "님이 들어왔습니다.");        
        }
        else if(arr[0] == "Leave")
        {
              answer.push(map.get(arr[1]) + "님이 나갔습니다.");         
        }
    }
    
    return answer;
}