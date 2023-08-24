# 리스트 자르기

> https://school.programmers.co.kr/learn/courses/30/lessons/181897

### 문제 설명

정수 `n`과 정수 3개가 담긴 리스트 `slicer` 그리고 정수 여러 개가 담긴 리스트 `num_list`가 주어집니다. `slicer`에 담긴 정수를 차례대로 a, b, c라고 할 때, `n`에 따라 다음과 같이 `num_list`를 슬라이싱 하려고 합니다.

- `n = 1` : `num_list`의 0번 인덱스부터 `b`번 인덱스까지
- `n = 2` : `num_list`의 `a`번 인덱스부터 마지막 인덱스까지
- `n = 3` : `num_list`의 `a`번 인덱스부터 `b`번 인덱스까지
- `n = 4` : `num_list`의 `a`번 인덱스부터 `b`번 인덱스까지 `c` 간격으로
 
올바르게 슬라이싱한 리스트를 `return`하도록 `solution` 함수를 완성해주세요.

### 제한사항

- `n` 은 1, 2, 3, 4 중 하나입니다.
- `slicer`의 길이 = 3
- `slicer`에 담긴 정수를 차례대로 a, b, c라고 할 때
  - 0 ≤ a ≤ b ≤ `num_list`의 길이 - 1
  - 1 ≤ c ≤ 3
- 5 ≤ `num_list`의 길이 ≤ 30
- 0 ≤ `num_list`의 원소 ≤ 100
