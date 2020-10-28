function solution(triangle) {
    var answer = 0;
    var arr = [triangle[0]];
    
    while(arr.length != triangle.length){
        arr.push([]);
        for(var i = 0; i < arr.length; i++){
            if(i == 0){
                arr[arr.length-1].push(triangle[arr.length-1][0] + arr[arr.length-2][0]);
            } else if(i == arr.length-1){
                arr[arr.length-1].push(triangle[arr.length-1][arr.length-1] + arr[arr.length-2][arr.length-2]);
            } else{
                arr[arr.length-1].push(triangle[arr.length-1][arr[arr.length-1].length]+Math.max(arr[arr.length-2][arr[arr.length-1].length], arr[arr.length-2][arr[arr.length-1].length-1]));
            }
            
        }
    }
    
    return Math.max.apply(null, arr[arr.length-1]);;
}