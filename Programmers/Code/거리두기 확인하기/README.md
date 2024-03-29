# 거리두기 확인하기
###### 문제 설명

개발자를 희망하는 죠르디가 카카오에 면접을 보러 왔습니다.  
  
코로나 바이러스 감염 예방을 위해 응시자들은 거리를 둬서 대기를 해야하는데 개발 직군 면접인 만큼  
아래와 같은 규칙으로 대기실에 거리를 두고 앉도록 안내하고 있습니다.

> 1.  대기실은 5개이며, 각 대기실은 5x5 크기입니다.
> 2.  거리두기를 위하여 응시자들 끼리는 맨해튼 거리[1](https://school.programmers.co.kr/learn/courses/30/lessons/81302#fn1)가 2 이하로 앉지 말아 주세요.
> 3.  단 응시자가 앉아있는 자리 사이가 파티션으로 막혀 있을 경우에는 허용합니다.

예를 들어,
|![PXP.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/8c056cac-ec8f-435c-a49a-8125df055c5e/PXP.png)

![PX_XP.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/d611f66e-f9c4-4433-91ce-02887657fe7f/PX_XP.png)

![PX_OP.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/ed707158-0511-457b-9e1a-7dbf34a776a5/PX_OP.png)

위 그림처럼 자리 사이에 파티션이 존재한다면 맨해튼 거리가 2여도 거리두기를  **지킨 것입니다.**

위 그림처럼 파티션을 사이에 두고 앉은 경우도 거리두기를  **지킨 것입니다.**

위 그림처럼 자리 사이가 맨해튼 거리 2이고 사이에 빈 테이블이 있는 경우는 거리두기를  **지키지 않은 것입니다.**

![P.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/4c548421-1c32-4947-af9e-a45c61501bc4/P.png)

![O.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/ce799a38-668a-4038-b32f-c515b8701262/O.png)

![X.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/91e8f98b-baeb-4f81-8cb6-5bafebebdcc7/X.png)

응시자가 앉아있는 자리(`P`)를 의미합니다.

빈 테이블(`O`)을 의미합니다.

파티션(`X`)을 의미합니다.

5개의 대기실을 본 죠르디는 각 대기실에서 응시자들이 거리두기를 잘 기키고 있는지 알고 싶어졌습니다. 자리에 앉아있는 응시자들의 정보와 대기실 구조를 대기실별로 담은 2차원 문자열 배열  `places`가 매개변수로 주어집니다. 각 대기실별로 거리두기를 지키고 있으면 1을, 한 명이라도 지키지 않고 있으면 0을 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

----------

##### 제한사항

-   `places`의 행 길이(대기실 개수) = 5
    -   `places`의 각 행은 하나의 대기실 구조를 나타냅니다.
-   `places`의 열 길이(대기실 세로 길이) = 5
-   `places`의 원소는  `P`,`O`,`X`로 이루어진 문자열입니다.
    -   `places`  원소의 길이(대기실 가로 길이) = 5
    -   `P`는 응시자가 앉아있는 자리를 의미합니다.
    -   `O`는 빈 테이블을 의미합니다.
    -   `X`는 파티션을 의미합니다.
-   입력으로 주어지는 5개 대기실의 크기는 모두 5x5 입니다.
-   return 값 형식
    -   1차원 정수 배열에 5개의 원소를 담아서 return 합니다.
    -   `places`에 담겨 있는 5개 대기실의 순서대로, 거리두기 준수 여부를 차례대로 배열에 담습니다.
    -   각 대기실 별로 모든 응시자가 거리두기를 지키고 있으면 1을, 한 명이라도 지키지 않고 있으면 0을 담습니다.

----------

##### 입출력 예
|places|result|
|--|--|
|`[["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]`|[1, 0, 1, 1, 1]|

----------

##### 입출력 예 설명

**입출력 예 #1**
첫 번째 대기실
|No.|0|1|2|3|4|
|--|--|--|--|--|--|
|0|P|O|O|O|P|
|1|O|X|X|O|X|
|2|O|P|X|P|X|
|3|O|O|X|O|X|
|4|P|O|X|X|P|

-   모든 응시자가 거리두기를 지키고 있습니다.

두 번째 대기실
|No.
|0|1|2|3|4|
|--|--|--|--|--|
|0|**P**|O|O|**P**|X|
|1|O|X|**P**|X|P|
|2|**P**|X|X|X|O|
|3|O|X|X|X|O|
|4|O|O|O|**P**|**P**|

-   (0, 0) 자리의 응시자와 (2, 0) 자리의 응시자가 거리두기를 지키고 있지 않습니다.
-   (1, 2) 자리의 응시자와 (0, 3) 자리의 응시자가 거리두기를 지키고 있지 않습니다.
-   (4, 3) 자리의 응시자와 (4, 4) 자리의 응시자가 거리두기를 지키고 있지 않습니다.

세 번째 대기실
|No.
|0|1|2|3|4|
|--|--|--|--|--|
|0|P|X|O|P|X|
|1|O|X|O|X|P|
|2|O|X|P|O|X|
|3|O|X|X|O|P|
|4|P|X|P|O|X|

-   모든 응시자가 거리두기를 지키고 있습니다.

네 번째 대기실
|No.|0|1|2|3|4|
|--|--|--|--|--|--|
|0|O|O|O|X|X|
|1|X|O|O|O|X|
|2|O|O|O|X|X|
|3|O|X|O|O|X|
|4|O|O|O|O|O|

-   대기실에 응시자가 없으므로 거리두기를 지키고 있습니다.

다섯 번째 대기실
|No.|0|1|2|3|4|
|--|--|--|--|--|--|
|0|P|X|P|X|P|
|1|X|P|X|P|X|
|2|P|X|P|X|P|
|3|X|P|X|P|X|
|4|P|X|P|X|P|

-   모든 응시자가 거리두기를 지키고 있습니다.

두 번째 대기실을 제외한 모든 대기실에서 거리두기가 지켜지고 있으므로, 배열 [1, 0, 1, 1, 1]을 return 합니다.

##### 풀이
1. 거리 두기를 확인하는 함수 check를 만듭니다.
 - x 축으로 이동할 거리를 저장할 배열 dx를 만든 후 [-1, 1, 0, 0]으로 초기화합니다.
 - y 축으로 이동할 거리를 저장할 배열 dy를 만든 후 [0, 0, -1, 1]으로 초기호합니다.
 - P가 나올 경우 위치 값을 저장할 배열 arr을 만들어 줍니다.
 - 0부터 4까지 반복하는 반복문을 만들고 그 안에 0부터 4까지 반복하는 반복문을 하나더 만들고 두 반복문의 현재 값을 사용하여 현재 좌표에 있는 값이 P인지 확인합니다. P인 경우 현재 값을 arr에 저장합니다.
 - 반복문이 종료되면 arr의 길이가 0보다 큰 경우 반복하는 반복문을 만들어 줍니다.
 - arr에 있는 값을 pop한 후 위치 값을 x와 y로 저장합니다. 0부터 3까지 반복하는 반복문을 만든 후 그 안에서 이동할 위치 moveX와 moveY를 저장하는데 값은 x, y에 dx, dy의 현재 위치 값을 더합니다.
 - move 값이 0보다 작거나 4보다 크면 continue를 통해 다음 위치로 넘어갑니다.
 - move를 통해 이동한 위치에 있는 값이 P인 경우 P옆에 P가 나온 경우이기 떄문에 0을 반환하고, X가 나온 경우 더 확인할 내용이 없기 때문에 continue합니다.
 - 위에서 if문을 안탄 경우 O이기 때문에 이후에 값을 한번더 확인해야합니다. 다시 0부터 3까지 반복하는 반복문을 만듭니다. nextX와 nextY를 만들어 move에 dx, dy의 현재 배열 값을 이용하여 값을 초기화합니다.
 - next 값이 0보다 작거나 4보다 큰 경우 continue를 통해 다음으로 넘어가고, next 값과 x, y와 동일한 경우 처음 위치이기 때문에 continue를 합니다. O 다음에 P 가 나오는 경우에만 문제가 있기 때문에 현재 값이 P인 경우 0을 반환합니다.
 - arr의 크기가 0이 되어 정상적으로 반복문이 종료되었을 경우 1을 반환합니다.
 2. 정답을 저장할 배열 answer을 만들어 줍니다.
 3. 0부터 4까지 반복하는 반복문을 만들고 1번에서 만든 check 함수를 호출합니다. 이때 places의 현재 위치 값을 매개변수로 전달하고 결과 값을 answer에 저장합니다.
 4. 3번에서 만든 반복문이 종료되면 answer을 반환합니다.