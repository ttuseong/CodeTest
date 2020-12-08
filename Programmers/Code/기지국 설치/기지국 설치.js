function solution(n, stations, w) {
    var ans = 0;
    var idx = 0;
    var location = 1;
    
    while(location<=n) {
        if(idx<stations.length && location >= stations[idx]-w) {
            location = stations[idx]+w+1;
            idx++;
        }else {
            location += 2*w+1;
            ans++;
        }
    }
    return ans;
}