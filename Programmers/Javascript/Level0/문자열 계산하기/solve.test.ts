import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: '3 + 4',
    answer: 7,
    description: `
      [입출력 예 #1]\n\n
      
      3 + 4 = 7을 return 합니다.
    `,
  },
];

describe("문자열 계산하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
