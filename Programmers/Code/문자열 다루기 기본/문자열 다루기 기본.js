function solution(s) {
    return (s.length===4 || s.length===6)&&!isNaN(s.replace(/[\.e]/gi, "a"));
}