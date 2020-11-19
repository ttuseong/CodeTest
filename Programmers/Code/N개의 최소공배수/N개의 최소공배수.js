function solution(arr) {
    
    for(var i = 0; i < arr.length - 1; i++){
        arr[i+1] = lcm(arr[i], arr[i+1]);
    }
    
    return arr[arr.length - 1];
    
    function lcm(a, b) {
        var tempA = a;
        var tempB = b;
	    while(tempB!=0) {
		    var temp=tempA%tempB;
			tempA=tempB;
			tempB=temp;
		}
		return (a*b)/tempA;
	}
}