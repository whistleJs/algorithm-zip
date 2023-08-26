import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['a', 'bc', 'd', 'efg', 'hi'],
    answer: 2,
    description: `
      [입출력 예 #1]\n\n
      
      각 문자열들을 길이에 맞게 그룹으로 묶으면 다음과 같습니다.\n\n
      
      - 1 => ['a', 'd'] (2개)\n
      - 2 => ['bc', 'hi']	(2개)\n
      - 3 => ['efg'] (1개)\n\n

      개수의 최댓값은 2이므로 2를 return 합니다.
    `,
  },
];

describe("문자열 묶기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
