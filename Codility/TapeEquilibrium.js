function solution(A) {
	var sum = 0;
	var min;
	var temp = 0;
	var _abs;

	for(var i = 0; i < A.length; i++){
		sum += A[i];
	}   

	for (var i = 0; i < A.length - 1; i++) {
		temp += A[i]

		_abs = Math.abs(sum - temp -temp);

		if(min != null)
		{
			if(min > _abs)
				min = _abs;
			
		}
		else
		{
			min = _abs;
		}
	}
	return min;
}