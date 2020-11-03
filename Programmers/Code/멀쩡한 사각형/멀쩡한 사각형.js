function solution(w, h) {
    var answer = 1;
    var biggerNumber = Math.max(w, h);
    var smallerNumber = Math.min(w, h);
    
    function calGcd(a,b) {
      if (b === 0){
        return a;
      }
      return calGcd(b, a%b)
    }
  
    var gcd = calGcd(biggerNumber,smallerNumber ); 
   
    var gcdW = w/gcd;
    var gcdH = h/gcd;
    
    var count = (gcdW + gcdH - 1) * gcd;
    
    answer = w * h - count;
  
    return answer;
}