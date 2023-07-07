import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [2, 1, 6],
      1
    ],
    answer: [2],
    description: `
      [입출력 예 #1]\n\n
      
      [2, 1, 6]의 첫 번째 원소부터 첫 번째 원소까지의 모든 원소는 [2]입니다.
    `,
  },
  {
    input: [
      [5, 2, 1, 7, 5],
      3
    ],
    answer: [5, 2, 1],
    description: `
      [입출력 예 #2]\n\n
      
      [5, 2, 1, 7, 5]의 첫 번째 원소부터 세 번째 원소까지의 모든 원소는 [5, 2, 1]입니다.
    `,
  },
];

describe("n 번째 원소까지", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
