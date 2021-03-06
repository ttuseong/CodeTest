# 단어 변환
###### 문제 설명

두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

```
1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.

```

예를 들어 begin이  hit, target가  cog, words가 [hot,dot,dog,lot,log,cog]라면  hit  ->  hot  ->  dot  ->  dog  ->  cog와 같이 4단계를 거쳐 변환할 수 있습니다.

두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

##### 제한사항

-   각 단어는 알파벳 소문자로만 이루어져 있습니다.
-   각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
-   words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
-   begin과 target은 같지 않습니다.
-   변환할 수 없는 경우에는 0를 return 합니다.

##### 입출력 예
|begin|target|words|return|
|--|--|--|--|
|hit|cog|[hot,  dot,  dog,  lot,  log,  cog]|4|
|hit|cog|[hot,  dot,  dog,  lot,  log]|0|

##### 입출력 예 설명

예제 #1  
문제에 나온 예와 같습니다.

예제 #2  
target인  cog는 words 안에 없기 때문에 변환할 수 없습니다.

##### 풀이
 - words에는 3개 이상 50개 이하의 단어가 있어서 최대 50번 이동하게 됩니다. answer에 51을 저장하고 시작합니다.
 - 현재 단어와 몇 번 이동했는지 카운트한 값을 전달받는 함수를 만듭니다.
	 - 만약 현재 단어와 목표 단어가 일치하고, 이동 횟수가  answer에 있는 값보다 작으면 answer에 이동 횟수를 저장합니다.
	 - words의 길이만큼 반복하는 반복문을 만듭니다.
		 - 현재 문자의 길이만큼 반복하는 반복문을 만듭니다.
			 - 같은 위치에 같은 단어가 있는 경우를 카운트합니다.
		- 만약 카운트한 값이 현재 문자의 길이보다 하나 작은 경우 변경이 가능한 단어이기 때문에 현재 문자에 해당 문자를 넣고 words에서는 그 값을 지웁니다. 여기서 값을 지우는 이유는 재귀를 통해 함수를 실행하면 두 단어를 반복해서 호출하여 끝이 안 나고, 정답이 아닌 경로를 삭제할 수 있습니다.
		- 변경한 단어와 이동 횟수를 하나 증가한 값을 통해 다시 함수를 호출합니다.
		- 이 경우 배열의 길이가 줄었기 때문에 i 값을 하나 줄입니다  
- 모든 재귀가 끝난 후 answer에 값이 51인 경우는 목표 값으로 변경이 불가능하다는 의미이기 때문에 0을 반환합니다.
- 아닌 경우 변경이 가능하기 때문에 최소 거리가 저장될 answer을 반환합니다.