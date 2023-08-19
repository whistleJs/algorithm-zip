import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [3, 10, 28],
      20
    ],
    answer: 28,
    description: `
      [입출력 예 #1]\n\n
      
      3, 10, 28 중 20과 가장 가까운 수는 28입니다.
    `,
  },
  {
    input: [
      [10, 11, 12],
      13
    ],
    answer: 12,
    description: `
      [입출력 예 #2]\n\n
      
      10, 11, 12 중 13과 가장 가까운 수는 12입니다.
    `,
  },
];

describe("가까운 수", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
