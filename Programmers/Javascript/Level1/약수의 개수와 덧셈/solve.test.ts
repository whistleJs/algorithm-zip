import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [13, 17],
    answer: 43,
    description: `
      [입출력 예 #1]\n\n
      
      13 + 14 + 15 - 16 + 17 = 43을 return 해야 합니다.
    `
  },
  {
    input: [24, 27],
    answer: 52,
    description: `
      [입출력 예 #2]\n\n
      
      24 - 25 + 26 + 27 = 52를 return 해야 합니다.
    `
  }
];

describe('약수의 개수와 덧셈', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
