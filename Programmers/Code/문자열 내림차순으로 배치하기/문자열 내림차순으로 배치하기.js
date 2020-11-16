function solution(s) {
    return s.split("").sort(function(a, b){
        return b.charCodeAt(0) - a.charCodeAt(0);
    }).join('');
}