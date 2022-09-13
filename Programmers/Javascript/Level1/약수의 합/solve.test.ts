import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 12,
    answer: 28,
    description: `
      [입출력 예 #1]\n\n
      
      12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.
    `
  },
  {
    input: 5,
    answer: 6,
    description: `
      [입출력 예 #2]\n\n
      
      5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.
    `
  }
];

describe('약수의 합', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
