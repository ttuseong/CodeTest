function solution(A) {
	var result = 0;
	for (var i = 0; i < A.length; i++) {
		result ^= A[i];
	}
	return result;
}

solution("1,2,3,2,5,2,2,1,5");