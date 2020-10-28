function solution(genres, plays) {
    var answer = [];
    var myMap = new Map();
    var arr = [];
    var arrSort = [];
    var max;
    var key;

    for(var i = 0; i < genres.length; i++)
    {
        if(!myMap.get(genres[i]))
        {
            myMap.set(genres[i], plays[i]);
        }
        else
        {
            myMap.set(genres[i], myMap.get(genres[i]) + plays[i]);
        }
    }
    
    while(myMap.size)
    {
        max = 0;
            
        for(let[k ,v] of myMap)
        {
            if(max < v)
                {
                    key = k
                    max = v;   
                }
        }
        
        arr.push(key);
        myMap.delete(key);
    }
    
    for(var i = 0; i < arr.length; i++)
    {
        for(var j = 0; j < genres.length; j++ )
        {
            if(arr[i] == genres[j])
            {
                arrSort.push(plays[j]);
            }               
        }
        
        console.log("arrSort : " + arrSort);
        arrSort.sort(function(a, b) {
                return b - a;
        });
        
        arrSort = arrSort.slice(0, 2);
        
        while(arrSort.length)
        {
            for(var j = 0; j < plays.length; j++)
            {
                if(arrSort[0] == plays[j])
                {
                    answer.push(j);
                    arrSort.shift();
                }
            }
        }
    }
    return answer;
}