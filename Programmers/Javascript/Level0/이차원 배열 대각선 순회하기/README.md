# 이차원 배열 대각선 순회하기

> https://school.programmers.co.kr/learn/courses/30/lessons/181829

### 문제 설명

2차원 정수 배열 `board`와 정수 `k`가 주어집니다.

`i + j` <= `k`를 만족하는 모든 (i, j)에 대한 `board[i][j]`의 합을 `return` 하는 `solution` 함수를 완성해 주세요.

### 제한사항

- 1 ≤ `board`의 길이 ≤ 100
- 1 ≤ `board[i]`의 길이 ≤ 100
  - 1 ≤ `board[i][j]` ≤ 10,000
  - 모든 `board[i]`의 길이는 같습니다.
- 0 ≤ `k` < `board`의 길이 + `board[i]`의 길이

