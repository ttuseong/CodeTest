function solution(s)
{
    var arr = [];
    
    for(var i = 0; i < s.length; i++){
        if(arr[arr.length - 1] == s[i]){
            arr.pop();
            continue;
        }
        
        arr.push(s[i]);
    }

    if(arr.length == 0){
        return 1;
    }
    
    return 0;
}