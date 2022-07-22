function solution(numbers, hand) {
    var answer = "";
    var leftHandPos = 10;
    var rightHandPos = 12;
    var currentPos = 0;
    var distanceL = 0;
    var distanceR = 0;
    
    for(var i = 0; i < numbers.length; i++){
        currentPos = numbers[i] == 0 ? 11 : numbers[i];
            
        if(currentPos % 3 == 1){
            answer += "L";
            leftHandPos = currentPos;
        } else if(currentPos % 3 == 0){
            answer += "R";
            rightHandPos = currentPos;
        } else{
            distanceL = Math.abs(Math.floor((leftHandPos - 1) / 3) - Math.floor((currentPos - 1) / 3)) + Math.abs((leftHandPos - 1) % 3 - (currentPos - 1) % 3);
            distanceR = Math.abs(Math.floor((rightHandPos - 1 ) / 3) - Math.floor((currentPos - 1) / 3)) + Math.abs((rightHandPos - 1) % 3 - (currentPos - 1) % 3);
            
            if(distanceL == distanceR){
                if(hand == "right"){
                    answer += "R";
                    rightHandPos = currentPos;
                }
                else{
                    answer += "L";
                    leftHandPos = currentPos;
                }
            }else if(distanceL < distanceR){
                answer += "L";
                leftHandPos = currentPos;
            }else{
                answer += "R";
                rightHandPos = currentPos;
            }
        }
    }
    
    return answer;
}