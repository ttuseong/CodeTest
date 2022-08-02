# 방문 길이
###### 문제 설명

게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.

-   U: 위쪽으로 한 칸 가기
    
-   D: 아래쪽으로 한 칸 가기
    
-   R: 오른쪽으로 한 칸 가기
    
-   L: 왼쪽으로 한 칸 가기
    

캐릭터는 좌표평면의 (0, 0) 위치에서 시작합니다. 좌표평면의 경계는 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.

![방문길이1_qpp9l3.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/ace0e7bc-9092-4b95-9bfb-3a55a2aa780e/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B51_qpp9l3.png)

예를 들어, "ULURRDLLU"로 명령했다면

![방문길이2_lezmdo.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/668c7458-e184-472d-9d32-f5d2acca759a/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B52_lezmdo.png)

-   1번 명령어부터 7번 명령어까지 다음과 같이 움직입니다.

![방문길이3_sootjd.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/08558e36-d667-4160-bfec-b754c78a7d85/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B53_sootjd.png)

-   8번 명령어부터 9번 명령어까지 다음과 같이 움직입니다.

![방문길이4_hlpiej.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/a52af28e-5835-438b-9f40-5467ebf9bf03/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B54_hlpiej.png)

이때, 우리는 게임 캐릭터가 지나간 길 중  **캐릭터가 처음 걸어본 길의 길이**를 구하려고 합니다. 예를 들어 위의 예시에서 게임 캐릭터가 움직인 길이는 9이지만, 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다. (8, 9번 명령어에서 움직인 길은 2, 3번 명령어에서 이미 거쳐 간 길입니다)

단, 좌표평면의 경계를 넘어가는 명령어는 무시합니다.

예를 들어, "LULLLLLLU"로 명령했다면

![방문길이5_nitjwj.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/f631f005-f8de-4392-a76c-a9ef64b6de08/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B55_nitjwj.png)

-   1번 명령어부터 6번 명령어대로 움직인 후, 7, 8번 명령어는 무시합니다. 다시 9번 명령어대로 움직입니다.

![방문길이6_nzhumd.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/35e62f0a-43c6-4142-bec6-6d28fbc57216/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B56_nzhumd.png)

이때 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다.

명령어가 매개변수 dirs로 주어질 때, 게임 캐릭터가 처음 걸어본 길의 길이를 구하여 return 하는 solution 함수를 완성해 주세요.

##### 제한사항

-   dirs는 string형으로 주어지며, 'U', 'D', 'R', 'L' 이외에 문자는 주어지지 않습니다.
-   dirs의 길이는 500 이하의 자연수입니다.

##### 입출력 예
|dirs|answer|
|--|--|
|"ULURRDLLU"|7|
|"LULLLLLLU"|7|

##### 입출력 예 설명

입출력 예 #1  
문제의 예시와 같습니다.

입출력 예 #2  
문제의 예시와 같습니다.

##### 풀이
1. 원점 부터 좌표를 저장할 배열([0, 0]으로 초기화), 이동할 좌표롤 저장할 변수, 이동했던 경로를 저장하는 set 변수를 만들고 입력받은 dirs만큼 반복하는 반복문을 만듭니다. switch를 통해 해당 값에 따라 이동할 좌표를 저장합니다. 
2. 현재 좌표와 이동할 좌표의 값이 동일할 경우 좌표평면의 경계에 있어 이동하지 못한 것으로 continue를 해서 다음으로 넘어갑니다.
3. set에 현재 좌표와 이동할 좌표를 문자열로 더한 값이 없고, 이동할 좌표와 현재 좌표를 문자열로 더한 값이 없는 경우 set에  현재 좌표와 이동할 좌표의 문자열로 더한 값을 저장합니다.
4. 현재 좌표에 이동할 좌표 값을 저장합니다.
5. 반복문이 끝났을 때 set에 저장된 크기를 반환합니다.