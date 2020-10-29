function solution(s) {
    var answer = '';

    if(s.length%2!=0){
        return s.substring(Math.ceil(s.length/2)-1, Math.ceil(s.length/2));
    } else{
        return s.substring(Math.ceil(s.length/2)-1, Math.ceil(s.length/2)+1);
    }
}