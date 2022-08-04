function solution(s) {
    var answer = 0;
    
    for(var i = 0; i < s.length; i++){
        s       = s.substr(-1 * s.length + 1) + s.substr(0, 1) ;
        answer += check(s);
    }
    
    return answer;
}

function check(s){
    var arr  = [];
    
    for(var i = 0; i < s.length; i++){
        switch(s[i]){
            case "[":
            case "(":
            case "{":
                arr.push(s[i]);
                break;
            case "]":
                if("[" != arr.pop()){
                    return 0;
                }
                break;
            case ")":
                if("(" != arr.pop()){
                    return 0;
                }
                break;
            case "}":
                if("{" != arr.pop()){
                    return 0;
                }
                break;
        }
    }
    
    if(arr.length > 0){
        return 0;
    }
    
    return 1;
}