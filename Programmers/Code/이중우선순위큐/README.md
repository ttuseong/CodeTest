# 이중우선순위큐

###### 문제 설명

이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.
|명령어 |수신 탑(높이)              |
|------|--------------------------|
|I 숫자|큐에 주어진 숫자를 삽입합니다.|
|D 1   |큐에서 최댓값을 삭제합니다   |
|D -1  |큐에서 최솟값을 삭제합니다.  |
이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

##### 제한사항

-   operations는 길이가 1 이상 1,000,000 이하인 문자열 배열입니다.
-   operations의 원소는 큐가 수행할 연산을 나타냅니다.
    -   원소는 “명령어 데이터” 형식으로 주어집니다.- 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
-   빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.

##### 입출력 예
|operations         |return|
|-------------------|------|
|[I 16,D 1]         |[0,0] |
|[I 7,I 5,I -5,D -1]|[7,5] |
##### 입출력 예 설명

16을 삽입 후 최댓값을 삭제합니다. 비어있으므로 [0,0]을 반환합니다.  
7,5,-5를 삽입 후 최솟값을 삭제합니다. 최대값 7, 최소값 5를 반환합니다.

##### 풀이
이 문제를 풀기 위해서는 각각의 명령어에 대한 처리와 마지막으로 출력될 값은 문자열이 아닌 숫자로 나타내는 것 그리고 결과로 나온 큐가 비어있는 경우 [0, 0]을 출력해주는 것입니다.
-  operations 배열의 길이 만큼 반복합니다.
	- 배열의 i번째 요소를 공백을 기준으로 문자열을 분할합니다.
	-  분할 된 문자열의 0번째 인덱스에 있는 값에 따라 조건을 분기합니다.
		- 값이 I인 경우 answer 배열에 분할된 문자열의 1번째 인덱스에 있는 값을 push하고 내림차순으로 정렬합니다.
		-  0번 째 인덱스가 D인 경우 1번째 인덱스가 1인 경우와 -1인 경우로 분기합니다.
			- 1인 경우 shift를 통해 최댓값을 삭제합니다.
			- -1인 경우 pop을 통해 최솟값을 삭제합니다.
	-  answer 배열에 값이 있는 경우와 없는 경우로 분기합니다.
		- 값이 있는 경우 answer 배열의 0번째 인덱스에 있는 값과 length - 1 인덱스에 있는 값에 1을 곱한 후 두 값을  리턴합니다.
		- 값이 없는 경우 [0, 0]을 리턴합니다 