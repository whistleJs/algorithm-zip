import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 12,
    answer: [2, 3],
    description: `
      [입출력 예 #1]\n\n
      
      12를 소인수분해하면 2 * 2 * 3 입니다. 따라서 [2, 3]을 return합니다.
    `,
  },
  {
    input: 17,
    answer: [17],
    description: `
      [입출력 예 #2]\n\n
      
      17은 소수입니다. 따라서 [17]을 return 해야 합니다.
    `,
  },
  {
    input: 420,
    answer: [2, 3, 5, 7],
    description: `
      [입출력 예 #3]\n\n
      
      420을 소인수분해하면 2 * 2 * 3 * 5 * 7 입니다. 따라서 [2, 3, 5, 7]을 return합니다.
    `,
  },
];

describe("소인수분해", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
