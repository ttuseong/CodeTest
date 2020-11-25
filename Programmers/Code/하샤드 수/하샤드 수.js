function solution(x) {
	var sum=0, temp = x;
    while(1){
    	sum += (temp % 10);

    	if(temp>=10)
    		temp = parseInt(temp/10);
    	else
    		return x % sum == 0 ? true : false;
    }
}