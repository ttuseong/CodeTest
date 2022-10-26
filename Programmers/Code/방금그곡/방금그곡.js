function solution(m, musicinfos) {
    var arr = [];
    var check = [["C#", "c"], ["D#", "d"], ["F#", "f"], ["G#", "g"], ["A#", "a"]]
    
    for(var i = 0; i < check.length; i++){
        var regexp = new RegExp(check[i][0], "g");
        m = m.replace(regexp, check[i][1]);
    }

    
    for(var i = 0; i < musicinfos.length; i++){
        var item = musicinfos[i].split(',');
        
        var startTime = item[0].split(':');
        var endTime = item[1].split(':');
        
        var time = (Number(endTime[0]) * 60 + Number(endTime[1])) - (Number(startTime[0]) * 60 + Number(startTime[1])); 
        
        for(var j = 0; j < check.length; j++){
            var regexp = new RegExp(check[j][0], "g");
            item[3] = item[3].replace(regexp, check[j][1]);
        }
        
        var string = item[3];
        
        for(var j = 0; j < time / item[3].length; j++){
            string += item[3];
        }
        
        string = string.slice(0, time);
        
        arr.push([item[2], string, time]);
    }
    
    arr.sort((a, b) => b[2] - a[2]);
    
    for(var i = 0; i < arr.length; i++){
        var index = arr[i][1].indexOf(m);
        if(index != -1){
            return arr[i][0];
        }
    }
    
    return "(None)";
}