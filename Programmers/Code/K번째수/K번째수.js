function solution(array, commands) {
    var answer = [];
    var sliceAnswer = [];

    for(var i = 0; commands.length > i; i++)
        {
            sliceAnswer = array.slice(commands[i][0]-1, commands[i][1]);
            sliceAnswer.sort((a,b) => a-b);
            answer.push(sliceAnswer[commands[i][2]-1]);   
        }
    return answer;
}