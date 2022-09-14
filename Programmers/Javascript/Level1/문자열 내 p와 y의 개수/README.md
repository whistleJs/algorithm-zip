# 문자열 내 p와 y의 개수

> https://school.programmers.co.kr/learn/courses/30/lessons/70128

### 문제 설명

대문자와 소문자가 섞여있는 문자열 `s`가 주어집니다. `s`에 `'p'의 개수`와 `'y'의 개수`를 비교해 같으면 `True`, 다르면 `False`를 `return` 하는 `solution`를 완성하세요. `'p', 'y'` 모두 하나도 없는 경우는 항상 `True`를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.  

예를 들어 `s`가 `"pPoooyY"`면 `true`를 return하고 `"Pyy"`라면 `false`를 return합니다.

-----

### 제한사항

- 문자열 `s`의 길이 : 50 이하의 자연수
- 문자열 `s`는 알파벳으로만 이루어져 있습니다.