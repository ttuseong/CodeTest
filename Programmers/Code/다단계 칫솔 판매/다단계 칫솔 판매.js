function solution(enroll, referral, seller, amount) {
    var answer = new Array(enroll.length).fill(0);
    
    for(var i = 0; i < seller.length; i++){
        var name = seller[i];
        var price = amount[i] * 100;
        var index = enroll.indexOf(name);
        
        while(true){
            var nextPrice = Math.floor(price * 0.1);
            
            answer[index] += (price - nextPrice);
            price = nextPrice;
            name = referral[index];

            if(price < 1 || name == "-"){
                break;
            }
            
            for(var j = 0; j < index; j++){
                if(enroll[j] == name){
                    index = j;
                }
            }
        }              
    }
    
    return answer;
}