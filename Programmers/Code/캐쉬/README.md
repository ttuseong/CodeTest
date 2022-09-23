# 캐쉬
지도개발팀에서 근무하는 제이지는 지도에서 도시 이름을 검색하면 해당 도시와 관련된 맛집 게시물들을 데이터베이스에서 읽어 보여주는 서비스를 개발하고 있다.  
이 프로그램의 테스팅 업무를 담당하고 있는 어피치는 서비스를 오픈하기 전 각 로직에 대한 성능 측정을 수행하였는데, 제이지가 작성한 부분 중 데이터베이스에서 게시물을 가져오는 부분의 실행시간이 너무 오래 걸린다는 것을 알게 되었다.  
어피치는 제이지에게 해당 로직을 개선하라고 닦달하기 시작하였고, 제이지는 DB 캐시를 적용하여 성능 개선을 시도하고 있지만 캐시 크기를 얼마로 해야 효율적인지 몰라 난감한 상황이다.

어피치에게 시달리는 제이지를 도와, DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성하시오.

### 입력 형식

-   캐시 크기(`cacheSize`)와 도시이름 배열(`cities`)을 입력받는다.
-   `cacheSize`는 정수이며, 범위는 0 ≦  `cacheSize`  ≦ 30 이다.
-   `cities`는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.
-   각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자로 이루어져 있다.

### 출력 형식

-   입력된 도시이름 배열을 순서대로 처리할 때, "총 실행시간"을 출력한다.

### 조건

-   캐시 교체 알고리즘은  `LRU`(Least Recently Used)를 사용한다.
-   `cache hit`일 경우 실행시간은  `1`이다.
-   `cache miss`일 경우 실행시간은  `5`이다.

### 입출력 예제

|캐시크기(cacheSize)|도시이름(cities)|실행시간|
|--|--|--|
|3|["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]|50|
|3|["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]|21|
|2|["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]|60|
|5|["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]|52|
|2|["Jeju", "Pangyo", "NewYork", "newyork"]|16|
|0|["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]|25|

### 풀이
1. 정답을 저장할 answer을 만든 후 0으로 초기화합니다.
2. cache 역할을 할 배열 arr을 만듭니다.
3. 0부터 cities의 크기보다 작을 때까지 반복하는 반복문을 만들어 줍니다.
4. 입력받은 cities에서 3번에서 만든 반복문의 현재 값을 통해 값을 조회하며 소문자로 변경 후 city 변수에 저장합니다.
5. indexOf를 통해 arr에서 city가 현재 어디에 있는지 조회하여 index에 저장합니다.
6. index의 값이 -1인 경우 arr에 현재 cities의 값이 없다는 의미이기 때문에 arr에 값을 push하고, arr의 크기가 casheSize보다 커진 경우 arr의 가장 앞에 있는 값을 제거합니다. 마지막으로 answer의 값에 5를 더합니다.
7. index의 값이 -1이 아닌 경우 splice를 통해 index 위치에 있는 값을 제거한 후 arr에 값을 새로 push합니다. 마지막으로 answer의 값에 1를 더합니다.
8. 반복문이 종료되면 answer을 반환합니다.