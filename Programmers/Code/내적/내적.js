function solution(a, b) {
    return a.reduce(function(acc, cur, idx) { return acc += cur*b[idx]}, 0);
}