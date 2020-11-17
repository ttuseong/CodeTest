function solution(s) {   
    s = s.split(" ");
    
    return (Math.min.apply(null, s) + " " + Math.max.apply(null, s));
}