function solution(n, works) {
    var answer = 0;
    var max = 0;
    
    works.sort((a, b) => b - a);
    
    while(0 < n){
        max = works[0];
        
        for(var i = 0; i < works.length; i++){
            if(works[i] == max){
                n--;
                works[i]--;
            }
            
            if(n == 0){
                break;
            }
        }
    }
    
    return works[works.length - 1 ] <= 0 ? 0 : works.reduce((a, b) => a + Math.pow(b, 2), 0);
}