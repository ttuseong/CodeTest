function solution(s){
    var arr = [];
    
    for(var i = 0; i < s.length; i++){
        switch(s[i]){
            case ')':
                if(arr.pop() == undefined){
                    return false
                }  
                break;
            case '(':
                arr.push("(");
                break;
        } 
    }
    
    return arr.length == 0 ? true : false;
}