function solution(orders, course) {
    var answer = [];
    
    
    for(var i = 0; i < course.length; i++){
        var map = new Map();
        
        for(var j = 0; j < orders.length; j++){
            var temp = getCombinations(orders[j].split(''), course[i]);
            
            for(var k = 0; k < temp.length; k++){
                if(map.get(temp[k]) == undefined){
                    map.set(temp[k], 1);     
                }else{
                    map.set(temp[k], map.get(temp[k]) + 1);
                }
            }
        }
        
        var max = Math.max(...map.values())
        
        if(2 <= max){
            for (const [key, value] of map) {
                if(value == max){
                    answer.push(key);
                }
            }
        }
        
        
    }
    
    return answer.sort();
}


const getCombinations = (arr, num) => {
    const results = [];

    // nC1 이며, 1이면 의미 없기때문에 바로 반환한다.
    if (num === 1) return arr.map(v => [v]);

    arr.forEach((fixed, index, origin) => {
        // 조합에서는 값 순서에 상관없이 중복이 되면 안되기 때문에 현재값 이후의 배열들만 추출한다.
        const rest = origin.slice(index + 1);
        
        
        // 나머지 배열을 기준으로 다시 조합을 실시한다.
        // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
        const combinations = getCombinations(rest, num - 1);

        // 기준값(fixed)에 돌아온 조합(combinations)을 붙인다.
        const attached = combinations.map(v => [fixed, ...v].sort().join(''));
        
        // 붙인 값을 결과 값에 넣어준다.
        results.push(...attached);
    });

    return results;
}
