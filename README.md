# 문법 정리
## JavaScript
### Math
##### 올림 / 반올림 / 버림
```
var number = 12.34;

console.log(Math.ceil(number)); //13
console.log(Math.floor(number)); //12
console.log(Math.round(number)); //12
```
##### 최댓값 / 최솟값
만약 크기를 비교할 수 없는 값이 배열에 있을 경우 결과는 NaN이 출력됩니다.
```
var test = [5,2,1,3,4];
console.log(Math.max.apply(null, test));
console.log(Math.min.apply(null, test));
```
### 정렬(sort)
sort 함수를 통해 정렬합니다. 그러나 추가적인 조건 없이 사용할 경우 아스키 코드를 기준으로 정렬하기 때문에 문제가 발생합니다.  
compareFunction를 통해 정렬 순서를 정의합니다.
 - 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
 - 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다.
 - 반환 값 > 0 : b가 a보다 앞에 있어야 한다.
  
그리고 정렬 순서를 사용자가 정의하기 때문에 배열의 특정 인덱스를 기준으로 정렬하는 것과 같이 다양한 방법으로 정렬이 가능하다. 단 반환 값과 0을 비교하여 정렬하기 때문에 문자열을 정렬하려고 할 경우 아스키 코드로 변경하는 방법과 같이 중간에 변경하는 과정이 추가로 필요합니다.
```
var arr1 = [5,2,1,3,4];

arr1.sort();
console.log(arr1); // [1,2,3,4,5]

var arr2 = [4,2,100,3,1];

arr2.sort();
console.log(arr2); // [1,100,2,3,4];

arr2.sort(function(a, b){
	return a - b;
});
console.log(arr2); // [1,2,3,4,100]

arr2.sort(function(a, b){
	return b - a;
});
console.log(arr2); // [100,4,3,2,1]

var arr3 = [[1,8,3], [4,2,6], [7,5,9]];

arr3.sort(function(a, b){
	return a[1] - b[1];
});  
console.log(arr3); // [[4,2,6],[7,5,9],[1,8,3]]

var arr4 = ['yjh', 'hmy', 'pjm'];
    
arr.sort(function(a, b){
	return a.charCodeAt(0) - b.charCodeAt(0);
});  
console.log(arr); // ['hmy', 'pjm', 'yjh']
```
### 아스키 코드 변환(charcodeAt / fromCharCode)
"문자열".charcodeAt(인덱스)
  
문자열에 해당 인덱스에 있는 문자를 아스키 코드로 변환
  
String.fromCharCode(Number)
  
아스키 코드 Number에 해당하는 값을 문자로 변환

```
var test = 'test';

console.log(test.charCodeAt(0)); // 116
console.log(String.fromCharCode(116)); // t
```
### 진법 변환(toString / parseInt)
```
// 10진수 -> 2진수
var dec = 5;
var bin = dec.toString(2);
console.log(bin); // 101

// 2진수 -> 10진수
var bin = '101';
var dec = parseInt(bin, 2);   
console.log(dec); // 5

// 10진수 -> 16진수
var dec = 21;
var hex = dec.toString(16);   
console.log(hex); // 15

// 16진수 -> 10진수
var hex = '15';
var dec = parseInt(hex, 16);
console.log(dec); // 21
```
  
  
### 앞으로 정리될 내용
reduce
slice, splice
