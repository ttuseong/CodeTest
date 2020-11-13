//풀이 1
function solution(strings, n) {
    
    strings.sort(function(a, b){
        if(a[n] != b[n]){
            return (a[n] > b[n]) - (a[n] < b[n]);
        } else{
            return (a > b) - (a < b);
        }
    });
    
    return strings;
}

//풀이 2
function solution(strings, n) {
    
    strings.sort(function(a, b){
        if(a[n] != b[n]){
            return a.charCodeAt(n) - b.charCodeAt(n);
        } else{
            return (a > b) - (a < b);
        }
    });
    
    return strings;
}