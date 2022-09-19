function solution(queue1, queue2) {
    var count = 0;
    var sum1 = queue1.reduce((acc, val) => acc + val);
    var sum2 = queue2.reduce((acc, val) => acc + val);
    var arr = queue1.concat(queue2);
    var mid = (sum1 + sum2) / 2;
    var queue1Index = 0;
    var queue2Index = queue1.length;

    while(count < 2 * arr.length){    
        if(mid < sum1){
            sum1 -= arr[queue1Index];
            
            queue1Index = queue1Index < arr.length - 1 ? queue1Index + 1 : 0
        } else if(sum1 < mid){
            sum1 += arr[queue2Index];
            
            queue2Index = queue2Index < arr.length - 1 ? queue2Index + 1 : 0
        } else{
            return count;
        }
        
        count++;
    }
    
    return -1;
}