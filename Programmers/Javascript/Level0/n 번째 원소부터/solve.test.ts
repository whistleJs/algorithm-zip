import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [2, 1, 6],
      3
    ],
    answer: [6],
    description: `
      [입출력 예 #1]\n\n
      
      [2, 1, 6]의 세 번째 원소부터 마지막 원소까지의 모든 원소는 [6]입니다.
    `,
  },
  {
    input: [
      [5, 2, 1, 7, 5],
      2
    ],
    answer: [2, 1, 7, 5],
    description: `
      [입출력 예 #2]\n\n
      
      [5, 2, 1, 7, 5]의 두 번째 원소부터 마지막 원소까지의 모든 원소는 [2, 1, 7, 5]입니다.
    `,
  },
];

describe("n 번째 원소부터", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
