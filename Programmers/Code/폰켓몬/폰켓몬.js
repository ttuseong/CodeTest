function solution(nums) {
    var answer = 0;
    
    var arr = nums.reduce((acc,curr) => acc.includes(curr) ? acc : [...acc,curr],[]); 
    
    answer = arr.length < nums.length / 2 ? arr.length : nums.length / 2;
    
    return answer;
}