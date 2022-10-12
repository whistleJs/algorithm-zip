import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [2, 1, 3, 4, 1],
    answer: [2, 3, 4, 5, 6, 7],
    description: `
      [입출력 예 #1]\n\n
      
      2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)\n
      3 = 2 + 1 입니다.\n
      4 = 1 + 3 입니다.\n
      5 = 1 + 4 = 2 + 3 입니다.\n
      6 = 2 + 4 입니다.\n
      7 = 3 + 4 입니다.\n\n

      따라서 [2, 3, 4, 5, 6, 7] 을 return 해야 합니다.
    `
  },
  {
    input: [5, 0, 2, 7],
    answer: [2, 5, 7, 9, 12],
    description: `
      [입출력 예 #2]\n\n
      
      2 = 0 + 2 입니다.\n
      5 = 5 + 0 입니다.\n
      7 = 0 + 7 = 5 + 2 입니다.\n
      9 = 2 + 7 입니다.\n
      12 = 5 + 7 입니다.\n\n

      따라서 [2, 5, 7, 9, 12] 를 return 해야 합니다.
    `
  }
];

describe('두 개 뽑아서 더하기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
