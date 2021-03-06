# 줄 서는 방법
###### 문제 설명

n명의 사람이 일렬로 줄을 서고 있습니다. n명의 사람들에게는 각각 1번부터 n번까지 번호가 매겨져 있습니다. n명이 사람을 줄을 서는 방법은 여러가지 방법이 있습니다. 예를 들어서 3명의 사람이 있다면 다음과 같이 6개의 방법이 있습니다.

-   [1, 2, 3]
-   [1, 3, 2]
-   [2, 1, 3]
-   [2, 3, 1]
-   [3, 1, 2]
-   [3, 2, 1]

사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때, k번째 방법을 return하는 solution 함수를 완성해주세요.

###### 제한사항

-   n은 20이하의 자연수 입니다.
-   k는 n! 이하의 자연수 입니다.

----------

##### 입출력 예
|n|k|result|
|--|--|--|
|3|5|[3,1,2]|

##### 입출력 예시 설명

입출력 예 #1  
문제의 예시와 같습니다.
##### 풀이
- 첫 번째 풀이
  
재귀를 통해 모든 방법을 조회하며 값을 찾는 방법으로 시도했지만, 효율성 테스트를 통과하지 못했습니다.
  
- 두 번째 풀이
  
왼쪽에서부터 숫자를 규칙을 통해 찾는 방법으로 문제를 해결했습니다.
  
문제 설명을 다시 확인하면 가장 왼쪽에 있는 숫자가 1, 2, 3인 경우가 각각 두 가지씩 존재하기 때문에 입출력 예시를 적용하여 k / 2 => 5 / 2 = 2를 구할 수 있고 여기서 결과 값으로 나온 2를 인덱스로 사용하면 가장 끝에 있는 3을 가져올 수 있습니다.
  
그렇다면 입렵값 n에 대해 가장 왼쪽에 있는 숫자들이 각각 몇 개의 경우가 존재하는지 파악해야 하고 이것은 n - 1개가 배치되는 경우의 수와 같으므로 n - 1의 펙토리얼로 구할 수 있습니다.
  
k 값을 그대로 사용하면 k가 2일 때 [1, 3, 2]를 찾아야 하는데 위에 내용을 적용하면 앞에 자리가 2가 되는 현상이 발생하고, 4와 6일 때도 같은 경우가 발생합니다. 따라서 처음 시작할 때 k 값을 1을 뺀 후 적용해야 합니다.
  
현재 위치의 숫자를 찾기 위해 k-1 / (n-1)!을 적용했는데 실제로 테스트한 결과 다음 위치에 올 숫자를 찾기 위해서는 k에 k-1 % (n-1)! 값을 넣어주면 됩니다. 
  
반복문을 통해 모든 위치에 숫자를 저장하는데 여기서 조심할 점은 변경된 k를 통해 위치를 찾으려고 하면 -1을 하면 안 됩니다. 따라서 반복문 전에 k를 1 빼고 반복문 안에는 k를 사용하여 연산을 하면 됩니다. 반복 조건으로는 1~n개의 숫자가 저장된 배열의 크기가 1일 때 종료되는데 마지막 숫자는 추가적인 연산 없이 그냥 저장하면 되기 때문에 1일 때 종료되고 마지막 값을 answer에 push하면 정상적으로 값이 나오게 됩니다.