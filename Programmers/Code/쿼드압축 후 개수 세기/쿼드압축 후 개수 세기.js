function solution(arr) {
    var answer = [0, 0];
    
    function compress(arr, length){
        var val = arr[0][0];
        
        if(length == 1){
            answer[val]++;
            return;
        }
        
        var sum = arr.reduce((acc, val) => acc + val.reduce((acc, val) => acc + val), 0);
        
        if(sum == 0 || sum == length * length){
            answer[val]++;
            return;
        }
        
        var upSlice = arr.slice(0, length / 2);
        var downSlice = arr.slice(length/2, length);
        
        compress(upSlice.map(value => value.slice(0, length / 2)), length / 2);
        compress(upSlice.map(value => value.slice(length/2, length)), length / 2);
        compress(downSlice.map(value => value.slice(0, length / 2)), length / 2);
        compress(downSlice.map(value => value.slice(length/2, length)), length / 2);    
    }
    
    compress(arr, arr.length)
    
    return answer;
}