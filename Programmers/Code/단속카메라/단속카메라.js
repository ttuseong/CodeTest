function solution(routes) {
    var answer = 0;
    var camPos = -30001;
    
    routes.sort(function(a, b){
        return a[1] - b[1];
    })
    
    for(var i = 0; i < routes.length; i++){
        if(camPos < routes[i][0]){
            camPos = routes[i][1];
            answer++;
        }
    }

    
    return answer;
}