function solution(A, K) {
    K %= A.length;
    var result;

    var B = A.splice(A.length - K, A.length - 1);
    result = B.concat(A);

    return result;   
}