function solution(price, money, count) {
    var sum = 0;
    
    sum = price * count * (count + 1) / 2
    
    return money < sum ? sum - money : 0 ;
}