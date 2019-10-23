function solution(N) {
	N = N.toString(2);
    
    var count = 0;
    var max = 0;

    for(var i = 0; i < N.length; i++)
    {
    	if(N[i] == 0)
    		count++
    	else
    	{
    		if(count>max)
    			max = count;
    		count = 0;
    	}
    }

    return max;
}