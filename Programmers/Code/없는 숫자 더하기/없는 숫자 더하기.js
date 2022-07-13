function solution(numbers) {
    var sum = 0;
    var index = 0;

    numbers.sort();

    for(var i = 0; i < 10; i++)
    {

        if(i == numbers[index])
        {
            index++;
            continue;
        }
        sum += i;
    }

    return sum;
}