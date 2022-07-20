function solution(lottos, win_nums) {
    var answer = [];
    var rank = [6, 6, 5, 4, 3, 2, 1]

    answer.push(rank[lottos.filter(i => win_nums.includes(i)).length + lottos.filter(i => i == 0).length]);
    answer.push(rank[lottos.filter(i => win_nums.includes(i)).length]);
    
    return answer;
}