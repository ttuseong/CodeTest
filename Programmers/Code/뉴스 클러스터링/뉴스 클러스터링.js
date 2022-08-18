function solution(str1, str2) {
    var arr1 = [];
    var arr2 = [];
    var union = []
    var intersectionCount = 0
    var unionCount = 0;
    
    for(var i = 0; i < str1.length - 1; i++){
        if(str1.slice(i, i + 2).match(/[^a-zA-Z]/) != null){
            continue;
        }
        
        arr1.push(str1.slice(i, i + 2).toUpperCase())
    }
    
    for(var i = 0; i < str2.length - 1; i++){
        
        if(str2.slice(i, i + 2).match(/[^a-zA-Z]/) != null){
            continue;
        }
        
        arr2.push(str2.slice(i, i + 2).toUpperCase())
    }

    union = [...new Set([...arr1, ...arr2])];
    
    for(var i = 0; i < union.length; i++){
        var arr1Count = arr1.filter(f => union[i].includes(f)).length;
        var arr2Count = arr2.filter(f => union[i].includes(f)).length;
        
        
        intersectionCount += Math.min(arr1Count, arr2Count);
        unionCount += Math.max(arr1Count, arr2Count);
    }

                                        
    return unionCount == 0 ? 65536 : Math.floor(intersectionCount / unionCount * 65536);
}