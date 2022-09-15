function solution(files) {
    files.sort(function(a, b){
        var headerA = a.match(/^\D+/)[0].toLowerCase();
        var headerB = b.match(/^\D+/)[0].toLowerCase();
        var numberA = Number(a.match(/\d+/)[0]);
        var numberB = Number(b.match(/\d+/)[0]);
        
        if(headerA < headerB){
            return -1;
        } else if(headerB < headerA){
            return 1;
        }
        
        return numberA - numberB;
    });
    
    return files;
}