import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [1, 2, 3, 4, 5],
      3
    ],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      [1, 2, 3, 4, 5] 안에 3이 있으므로 1을 return합니다.
    `,
  },
  {
    input: [
      [15, 98, 23, 2, 15],
      20
    ],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      [15, 98, 23, 2, 15] 안에 20이 없으므로 0을 return합니다.
    `,
  },
];

describe("정수 찾기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
