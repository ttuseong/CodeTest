function solution(cards) {
    var answer = 0;
    var check = new Array(cards.length).fill(0)
    var arr = [];
    
    for(var i = 0; i < cards.length; i++){
        var count = 1;
        var item = cards[i];
        
        if(check[i] == 1){
            continue;
        }
        
        check[i] = 1;
        
        while(true){
            if(check[item - 1] == 1){    
                arr.push(count)
                break;
            }
            
            check[item - 1] = 1;
            item = cards[item - 1];
            count++;
        }
    }
    
    arr.sort((a, b) => b - a);
    
    return arr.length < 2 ? 0 : arr[0] * arr[1];
}