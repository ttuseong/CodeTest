function solution(s)
{
    for(var i = s.length; 0 < i; i--){
        for(var j = 0; j < s.length - i; j++){
            if(isPalidrome(s.substr(j, i + 1)) == true){
                return i + 1;
            }
        }
    }
    
    return 1;
}

function isPalidrome(s){
    for(var i = 0; i < Math.floor(s.length / 2); i++){
        if(s[i] != s[s.length - i - 1]){
            return false;
        }
    }
    
    return true;
}