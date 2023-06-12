import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 40,
    answer: 1983,
    description: `
      [입출력 예 #1]\n\n
      
      2022년 기준 40살이므로 1983년생입니다.
    `,
  },
  {
    input: 23,
    answer: 2000,
    description: `
      [입출력 예 #2]\n\n
      
      2022년 기준 23살이므로 2000년생입니다.
    `,
  },
];

describe("나이 출력", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
