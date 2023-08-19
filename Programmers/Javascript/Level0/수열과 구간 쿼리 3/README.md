# 수열과 구간 쿼리 3

> https://school.programmers.co.kr/learn/courses/30/lessons/181924

### 문제 설명

정수 배열 `arr`와 2차원 정수 배열 `queries`이 주어집니다. `queries`의 원소는 각각 하나의 `query`를 나타내며, `[i, j]` 꼴입니다.

각 `query`마다 순서대로 `arr[i]`의 값과 `arr[j]`의 값을 서로 바꿉니다.

위 규칙에 따라 `queries`를 처리한 이후의 `arr`를 `return` 하는 `solution` 함수를 완성해 주세요.

### 제한사항

- 1 ≤ `arr`의 길이 ≤ 1,000
  - 0 ≤ `arr`의 원소 ≤ 1,000,000
- 1 ≤ `queries`의 길이 ≤ 1,000
  - 0 ≤ `i` < `j` < `arr`의 길이
