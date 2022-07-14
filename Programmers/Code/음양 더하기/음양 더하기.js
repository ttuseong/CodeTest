function solution(absolutes, signs) {
    var answer = absolutes.reduce(function(acc, cur, idx) { return acc += signs[idx] == true ? cur : -1 * cur}, 0);
    return answer;
}