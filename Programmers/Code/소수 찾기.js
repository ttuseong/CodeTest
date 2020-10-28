var arr = [];
function solution(numbers) {
    var answer = 0;
    var ermutationArr = [];
    
    ermutationArr = getAllPermutations(numbers);
    
    arr.concat(ermutationArr);
    
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i][0] == '0')
            arr[i] = arr[i].replace(/(^0+)/, "");
    }
    
    arr = arr.filter( (item, idx, array) => {
	return array.indexOf( item ) === idx ;
    });
    
    for(var i = 0; i < arr.length; i++)
    {
        for(var j = 2; j <= arr[i]; j++)
        {
            if(arr[i] == j)
            {
                answer++
                break;
            }
            if(arr[i] % j == 0)
            {
                break;;
            }
        }
    }
    
    return answer;
}

function getAllPermutations(string) {
    var results = [];

    if (string.length === 1) {
        results.push(string);
        arr.push(string);
        return results;
  }

    for (var i = 0; i < string.length; i++) {
        var firstChar = string[i];
        var charsLeft = string.substring(0, i) + string.substring(i + 1);
        var innerPermutations = getAllPermutations(charsLeft);
    
        for (var j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);   
        }
    
        arr = arr.concat(results);
    }
    return results;
}