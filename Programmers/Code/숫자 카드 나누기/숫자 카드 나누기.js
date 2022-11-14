function gcd(arr){
    var result = arr[0];
    var n = 0;
    
    for(var i = 1; i < arr.length; i++){
        var b = arr[i];
        while(b != 0){
	        n = result % b;
	        result = b;
	        b = n;
        }
    }
    
    return result;
}

function solution(arrayA, arrayB) {
    var aResult = gcd(arrayA);
    var bResult = gcd(arrayB);

    
    return Math.max(arrayA.filter(f => f % bResult == 0).length == 0 ? bResult : 0,
                   arrayB.filter(f => f % aResult == 0).length == 0 ? aResult : 0);
}