import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [3, 4, 5, 2, 1],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      모든 원소의 곱은 120, 합의 제곱은 225이므로 1을 return합니다.
    `,
  },
  {
    input: [5, 7, 8, 3],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      모든 원소의 곱은 840, 합의 제곱은 529이므로 0을 return합니다.
    `,
  },
];

describe("원소들의 곱과 합", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
