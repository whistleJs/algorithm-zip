import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 1234,
    answer: 10,
    description: `
      [입출력 예 #1]\n\n
      
      1 + 2 + 3 + 4 = 10을 return합니다.
    `,
  },
  {
    input: 930211,
    answer: 16,
    description: `
      [입출력 예 #2]\n\n
      
      9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.
    `,
  },
];

describe("자릿수 더하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
