function solution(relation) {
    var answer = [];
    var indexList = Array.from(Array(relation[0].length), (x, index) => index);
    
    for(var i = 1; i <= relation[0].length; i++){
        var combinations = getCombinations(indexList, i);
          
        for (const attr of combinations) {
            var check = false;
            var set = new Set();
            
            
            for(var j = 0; j < answer.length; j++){
                check = answer[j].every(att => attr.includes(att));
                
                if(check == true){
                    break;
                }
            }
            
            if(check == true){
                continue;
            }
            
            for(var k = 0; k < relation.length; k++){
                var item = "";
                
                for(var j = 0; j < attr.length; j++){
                    item += relation[k][attr[j]];
                }
                set.add(item);
            }
            
            if(set.size == relation.length){
                answer.push(attr);
            }
        }    
    }
    return answer.length;
}


//조합 함수
const getCombinations = (array, selectNumber) => {
    const result = [];
    if (selectNumber === 1) {
        return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
        const restCombinations = getCombinations(origin.slice(index + 1), selectNumber - 1);
        const attached = restCombinations.map((restCombination) => [fixed, ...restCombination]);
        result.push(...attached);
    });
    return result;
}
