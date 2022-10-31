function solution(n) {
    return new Array(Math.ceil(n / 2)).fill("수박").join('').substr(0, n);
}