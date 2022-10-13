import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: '1S2D*3T',
    answer: 37,
    description: `
      [입출력 예 #1]\n\n
      
      (1 * 1) * 2 + (2 * 2) * 2 + (2 * 2 * 2)
    `,
  },
  {
    input: '1D2S#10S',
    answer: 9,
    description: `
      [입출력 예 #2]\n\n
      
      (1 * 1) + (2) * (-1) + (10)
    `,
  },
  {
    input: '1D2S0T',
    answer: 3,
    description: `
      [입출력 예 #3]\n\n
      
      (1 * 1) + (2) + (0 * 0 * 0)
    `,
  },
  {
    input: '1S*2T*3S',
    answer: 23,
    description: `
      [입출력 예 #4]\n\n
      
      (1) * 2 * 2 + (2 * 2 * 2) * 2 + (3)
    `,
  },
  {
    input: '1D#2S*3S',
    answer: 5,
    description: `
      [입출력 예 #5]\n\n
      
      (1 * 1) * (-1) * 2 + (2) * 2 + (3)
    `,
  },
  {
    input: '1T2D3D#',
    answer: -4,
    description: `
      [입출력 예 #6]\n\n
      
      (1 * 1 * 1) + (2 * 2) + (3 * 3) * (-1)
    `,
  },
  {
    input: '1D2S3T*',
    answer: 59,
    description: `
      [입출력 예 #7]\n\n
      
      (1 * 1) + (2) * 2 + (3 * 3 * 3) * 2
    `,
  },
];

describe("[1차] 다트 게임", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
