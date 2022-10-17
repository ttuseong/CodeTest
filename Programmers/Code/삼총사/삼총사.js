function solution(number) {
    var answer = 0;
    
    var arr = getCombinations(number, 3);
    
    for(var i = 0; i < arr.length; i++){
        var sum = arr[i].reduce((acc, val) => acc + val);
        
        if(sum == 0){
            answer++;
        }
    }
    
    return answer;
}

const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });

    return results;
}