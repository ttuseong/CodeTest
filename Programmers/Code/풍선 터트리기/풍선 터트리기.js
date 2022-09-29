
function solution(a) {  
    var answer = new Set();
    var left = a[0];
    var right = a[a.length - 1];
    
    for(var i = 1; i < a.length - 1; i++){
        if(a[i] < left){
            answer.add(a[i]);
            left = a[i];
        }
        
        if(a[a.length - i - 1] < right){
            answer.add(a[a.length - i - 1]);
            right = a[a.length - i - 1];
        }
    }
    
    return answer.size + 2;
}