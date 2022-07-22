function solution(s) {
    return s.split(" ").map(m => m.split("").map((n, index) => index % 2 == 0 ? n.toUpperCase() : n.toLowerCase()).join("")).join(" ");
}