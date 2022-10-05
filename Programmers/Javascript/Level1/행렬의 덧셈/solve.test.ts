import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[][], number[][]];
type TestCaesAnswer = number[][];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [[1, 2], [2, 3]],
      [[3, 4], [5, 6]]
    ],
    answer: [
      [4, 6],
      [7, 9]
    ],
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `
  },
  {
    input: [
      [[1], [2]],
      [[3], [4]]
    ],
    answer: [
      [4], [6]
    ],
    description: `
      [입출력 예 #2]\n\n
      
      설명 없습니다.
    `
  }
];

describe('행렬의 덧셈', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
