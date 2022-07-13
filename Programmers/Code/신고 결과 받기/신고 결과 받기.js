function solution(id_list, report, k) {
    //id_list크기만큼 answert 크기 생성 및 0으로 초기화
    var answer = new Array(id_list.length).fill(0);
    
    //중복 신고의 경우 1회로 처리되게 때문에 중복 제거
    report = [...new Set(report)];
    
    //신고당한 횟수 저장
    var map = new Map();
    
    for(var i = 0; i < report.length; i++)
    {
        var item = report[i].split(" ");
        var arr = [];
        
        
        if(true == map.has(item[1]))
        {
            arr = map.get(item[1]);
            arr.push(item[0]);
            map.set(item[1], arr);
        }
        else
        {
            arr.push(item[0])
            map.set(item[1], arr)   
        }
    }
    
    //id_list의 유저가 신고처리 되었을 경우 신고한 유저의 index에 1++
    for(var i = 0; i < id_list.length; i++)
    {
        var reporter = map.get(id_list[i]);
        
        if(undefined == reporter)
        {
            continue;        
        }
        
        
        if(reporter.length < k)
        {
            continue;
        }
        
        for(var j = 0; j < reporter.length; j++)
        {
            answer[id_list.indexOf(reporter[j], 0)]++;      
        }
    }
    
    return answer;
}