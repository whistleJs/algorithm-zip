import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 1.42,
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      1.42의 정수 부분은 1입니다.
    `,
  },
  {
    input: 69.32,
    answer: 69,
    description: `
      [입출력 예 #2]\n\n
      
      69.32의 정수 부분은 69입니다.
    `,
  },
];

describe("정수 부분", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
