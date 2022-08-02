function solution(dirs) {
    var coordinate      = [0, 0];
    var tempCoordinate  = [0, 0];
    var set             = new Set();
    
    for(var i = 0; i < dirs.length; i++){  
        switch(dirs[i]){
            case 'U':
                tempCoordinate[1] = tempCoordinate[1] + 1 < 6 ? tempCoordinate[1] + 1 : 5
                break;
            case 'D':
                tempCoordinate[1] = -6 < tempCoordinate[1] - 1 ? tempCoordinate[1] - 1 : -5
                break;
            case 'R':
                tempCoordinate[0] = tempCoordinate[0] + 1 < 6 ? tempCoordinate[0] + 1 : 5
                break;
            case 'L':
                tempCoordinate[0] = -6 < tempCoordinate[0] - 1 ? tempCoordinate[0] - 1 : -5
                break;
        }
        
        if(coordinate[0] == tempCoordinate[0] && coordinate[1] == tempCoordinate[1]){
            continue;
        }
        
        var string1 = coordinate[0].toString() + coordinate[1].toString();
        var string2 = tempCoordinate[0].toString() + tempCoordinate[1].toString();
        
        if(false == set.has(string1 + string2) && false == set.has(string2 + string1)){
            set.add(string1 + string2);
        }
        
        coordinate = [...tempCoordinate];
    }

    return set.size;
}