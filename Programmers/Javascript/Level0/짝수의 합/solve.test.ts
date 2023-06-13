import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 10,
    answer: 30,
    description: `
      [입출력 예 #1]\n\n
      
      n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.
    `,
  },
  {
    input: 4,
    answer: 6,
    description: `
      [입출력 예 #2]\n\n
      
      n이 4이므로 2 + 4 = 6을 return 합니다.
    `,
  },
];

describe("짝수의 합", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
