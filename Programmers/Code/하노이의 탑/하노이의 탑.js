const answer = [];

const hanoi = (n, src, dst, temp) => {
    if (n === 1) {
        answer.push([src, dst]);
    }
    else {
        hanoi(n - 1, src, temp, dst);
        answer.push([src, dst]);
        hanoi(n - 1, temp, dst, src);
    }
}

function solution(n) {
    hanoi(n, 1, 3, 2);
    
    return answer;
}