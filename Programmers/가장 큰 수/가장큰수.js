function solution(numbers) {
    var result = numbers.sort(function(a, b){
        return (b.toString()+a.toString()) - (a.toString()+b.toString());
    });

    if(result[0] == '0')
        return '0';


    return result.join('');
}