# 선입 선출 스케줄링

처리해야 할 동일한 작업이 n 개가 있고, 이를 처리하기 위한 CPU가 있습니다.

이 CPU는 다음과 같은 특징이 있습니다.

-   CPU에는 여러 개의 코어가 있고, 코어별로 한 작업을 처리하는 시간이 다릅니다.
-   한 코어에서 작업이 끝나면 작업이 없는 코어가 바로 다음 작업을 수행합니다.
-   2개 이상의 코어가 남을 경우 앞의 코어부터 작업을 처리 합니다.

처리해야 될 작업의 개수 n과, 각 코어의 처리시간이 담긴 배열 cores 가 매개변수로 주어질 때, 마지막 작업을 처리하는 코어의 번호를 return 하는 solution 함수를 완성해주세요.

##### 제한 사항

-   코어의 수는 10,000 이하 2이상 입니다.
-   코어당 작업을 처리하는 시간은 10,000이하 입니다.
-   처리해야 하는 일의 개수는 50,000개를 넘기지 않습니다.

----------

##### 입출력 예
|n|cores|result|
|--|--|--|
|6|[1,2,3]|2|

##### 입출력 예 설명

입출력 예 #1  
처음 3개의 작업은 각각 1,2,3번에 들어가고, 1시간 뒤 1번 코어에 4번째 작업,다시 1시간 뒤 1,2번 코어에 5,6번째 작업이 들어가므로 2를 반환해주면 됩니다.

##### 풀이
1. 처음 시작할 때 cpu의 모든 코어는 사용하는 중이 아니기 때문에 입력받은 n에서 코어의 수만 큼 빼고 시작합니다.
2. 2진 탐색을 하기 위해 left는 1로 설정하고 right의 경우 가장 코어의 시간 중 가장 오래 걸리는 시간 * n을 한 후 코어의 수만큼 나누어 줍니다. 처리한 량을 저장할 capacity과 중간 값을 저장할 mid를 만듭니다.
3. left < right의 경우 반복하는 반복문을 만든 후 mid 값을 구한 후 capacity는 0으로 초기화합니다.
4. cores를 반복하면서 mid를 진행하기 위해 다른 코어들이 얼마나 사용되었는지 구합니다.
5. 4번에서 구한 값이 n보다 큰 경우 right의 값을 mid에 저장된 값으로 변경하고, 아닌 경우 left의 값을 mid에 저장된 값으로 변경합니다.
6. 5번까지 진행했을 경우 right에 있는 값이 경과 시간이 됩니다. 마지막으로 진행된 코어를 알기 위해 바로 전 시간까지 진행된 코어를 n에서 뺴줍니다.
7. 0부터 cores의 길이까지 반복하는 반복문을 만든 후 cores의 값 중 right와 나누어서 나머지가 0이되는 경우가 발생하면 n을 1씩 감소하고 n이 0이되는 순간 return을 하는데 여기서 마지막 작업을 처리하는 코어의 번호를 리턴해야하기 때문에 i + 1을 리턴합니다.