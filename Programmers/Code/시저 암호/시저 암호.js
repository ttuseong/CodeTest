function solution(s, n) {
    var answer = '';
    
    for(var i = 0; i < s.length; i++){ 
        answer+=(s[i].replace(/^[a-zA-Z]*$/, String.fromCharCode(((s.charCodeAt(i) < 91 && s.charCodeAt(i) + n >90) || (s.charCodeAt(i) < 123 && s.charCodeAt(i) + n >122) ? s.charCodeAt(i)+n -26 : s.charCodeAt(i)+n 
))));
        
    }
    
    return answer;
}