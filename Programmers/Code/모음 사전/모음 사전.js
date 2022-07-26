function solution(word) {
    var alphabet = {A : 0, E : 1, I : 2, O : 3, U : 4}
    var value = [781, 156, 31, 6, 1];
    
    return word.split("").map((val, index) => 1 + value[index] * alphabet[val]).reduce((acc, val) => acc += val);
}