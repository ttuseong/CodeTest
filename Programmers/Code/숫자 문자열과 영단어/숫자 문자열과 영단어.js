function solution(s) {
    var arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    for(var i = 0; i < arr.length; i++){
        s = s.replace(new RegExp(arr[i], "g"), i);;
    }
    
    return Number(s);
}