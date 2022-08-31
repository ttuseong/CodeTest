function solution(n, cores) {
    n -= cores.length;

    var left      = 1;
    var right     = Math.max.apply(null, cores) * n / cores.length;
    var capacity  = 0;
    var mid       = 0;

    while(left < right) {
        mid      = Math.floor((left + right) / 2);
        capacity = 0;

        for(const core of cores) {
            capacity += Math.floor(mid / core);
        }

        if(capacity >= n) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    for(const core of cores) {
        n -= Math.floor((right - 1) / core);
    }

    for(var i = 0; i < cores.length; i++){
        if(right % cores[i] == 0){
            n--;
        }

        if(n == 0){
            return i + 1;
        }
    }
}