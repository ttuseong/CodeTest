function solution(A) {
	A = A.sort(function(a, b){
		return a - b;
	})
	for (var i = 0; i < A.length; i++) {
		if(i + 1 != A[i])
			return 0;
	}
	return 1;
}