function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var runTrucks = [];
    var b_weight = 0;
    
    while(truck_weights.length > 0 || runTrucks.length > 0)
        {
            answer++;
            
            if(runTrucks[0] && (runTrucks[0].time + bridge_length) == answer){
                b_weight -= runTrucks.shift().weight;
            }
            
            if(weight >= b_weight + truck_weights[0]){
                    b_weight += truck_weights[0];
                    runTrucks.push({time : answer, weight : truck_weights[0]});
                    truck_weights.shift();
                }
            
        }
    return answer;
}