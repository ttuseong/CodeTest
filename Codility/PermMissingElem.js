function solution(A) {
    var sum = 0;

    for (var i = 0; i < A.length; i++) {

    	sum = (i + 1) - A[i] + sum
    }
    sum += A.length + 1;
    return sum
}
