# 날짜 비교하기

> https://school.programmers.co.kr/learn/courses/30/lessons/181838

### 문제 설명

정수 배열 `date1`과 `date2`가 주어집니다. 두 배열은 각각 날짜를 나타내며 `[year, month, day]` 꼴로 주어집니다. 각 배열에서 `year`는 연도를, `month`는 월을, `day`는 날짜를 나타냅니다.  

만약 `date1`이 `date2`보다 앞서는 날짜라면 1을, 아니면 0을 `return` 하는 `solution` 함수를 완성해 주세요.

### 제한사항

- `date1`의 길이 = `date2`의 길이 = 3
  - 0 ≤ `year` ≤ 10,000
  - 1 ≤ `month` ≤ 12
  - `day`는 `month`에 따라 가능한 날짜로 주어집니다.
