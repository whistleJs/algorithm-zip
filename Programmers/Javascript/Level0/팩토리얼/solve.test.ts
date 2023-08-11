import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 3628800,
    answer: 10,
    description: `
      [입출력 예 #1]\n\n
      
      10! = 3,628,800입니다. n이 3628800이므로 최대 팩토리얼인 10을 return 합니다.
    `,
  },
  {
    input: 7,
    answer: 3,
    description: `
      [입출력 예 #2]\n\n
      
      3! = 6, 4! = 24입니다. n이 7이므로, 7 이하의 최대 팩토리얼인 3을 return 합니다.
    `,
  },
];

describe("팩토리얼", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
