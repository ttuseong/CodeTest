function solution(n)
{
    return [...n.toString()].reduce((acc, val) => Number(acc) + Number(val), 0);
}