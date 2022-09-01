function solution(p) {

    return check(p) == 1 ? p : chage(p);
}

function chage(string){
    var left    = 0;
    var right   = 0;
    var u       = "";
    var v       = "";
    
    if(string == ""){
        return "";
    }
    
    for(var i = 0; i < string.length; i++){
        if(string[i] == "("){
            left++;
        } else{
            right++;
        } 
        
        if(left == right){
            break;
        }
    }
    
    u = string.substring(0, left + right);
    v = string.substring(left + right, string.length);
    
    if(check(u) == 1){
        return u + chage(v);
    }else{
        var newString = "";
        
        for(var i = 1; i < u.length - 1; i++){
            if(u[i] == "("){
                newString += ")";
            } else{
                newString += "(";
            }
        }
        
        return "(" + chage(v) + ")" + newString;
    }
    
    
}

function check(string){
    var arr = [];
    var popData = "";
    
    for(var i = 0; i < string.length; i++){
        
        if(string[i] == "("){
            arr.push("(")
        }else{
            popData = arr.pop();
        }
        
        if(popData == undefined){
            return 0;
        }
    }
    
    return arr.length == 0 ? 1 : 0;
}