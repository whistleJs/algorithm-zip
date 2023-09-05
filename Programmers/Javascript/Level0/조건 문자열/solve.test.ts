import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string, number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['<', '=', 20, 50],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      20 <= 50은 참이기 때문에 1을 return합니다.
    `,
  },
  {
    input: ['>', '!', 41, 78],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      41 > 78은 거짓이기 때문에 0을 return합니다.
    `,
  },
];

describe("조건 문자열", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
