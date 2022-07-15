import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number[]];
type TestCaesAnswer = number;

		3
		-2

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [1, 2, 3, 4],
      [-3, -1, 0, 2]
    ],
    answer: 3,
    description: `
      [입출력 예 #1]\n\n
      
      a와 b의 내적은 (1 * -3) + (2 * -1) + (3 * 0) + (4 * 2) = 3 입니다.
    `
  },
  {
    input: [
      [-1, 0, 1],
      [1, 0, -1]
    ],
    answer: -2,
    description: `
      [입출력 예 #2]\n\n
      
      a와 b의 내적은 (-1 * 1) + (0 * 0) + (1 * -1) = -2 입니다.
    `
  }
];

describe('내적', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
