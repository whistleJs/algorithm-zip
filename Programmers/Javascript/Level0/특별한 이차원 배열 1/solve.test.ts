import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number[][];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 3,
    answer: [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ],
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `,
  },
  {
    input: 6,
    answer: [
      [1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1]
    ],
    description: `
      [입출력 예 #2]\n\n
      
      설명 없습니다.
    `,
  },
  {
    input: 1,
    answer: [
      [1]
    ],
    description: `
      [입출력 예 #3]\n\n
      
      설명 없습니다.
    `,
  },
];

describe("특별한 이차원 배열 1", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
