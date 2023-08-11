# 배열 만들기 5

> https://school.programmers.co.kr/learn/courses/30/lessons/181912

### 문제 설명

문자열 배열 `intStrs`와 정수 `k`, `s`, `l`가 주어집니다. `intStrs`의 원소는 숫자로 이루어져 있습니다.

배열 `intStrs`의 각 원소마다 `s`번 인덱스에서 시작하는 길이 `l`짜리 부분 문자열을 잘라내 정수로 변환합니다. 이때 변환한 정수값이 `k`보다 큰 값들을 담은 배열을 `return` 하는 `solution` 함수를 완성해 주세요.

### 제한사항

- 0 ≤ `s` < 100
- 1 ≤ `l` ≤ 8
- 10^(l - 1) ≤ `k` < 10^l
- 1 ≤ `intStrs`의 길이 ≤ 10,000
  - `s + l` ≤ `intStrs`의 원소의 길이 ≤ 120
