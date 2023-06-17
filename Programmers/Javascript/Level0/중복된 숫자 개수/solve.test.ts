import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [1, 1, 2, 3, 4, 5],
      1
    ],
    answer: 2,
    description: `
      [입출력 예 #1]\n\n
      
      [1, 1, 2, 3, 4, 5] 에는 1이 2개 있습니다.
    `,
  },
  {
    input: [
      [0, 2, 3, 4],
      1
    ],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      [0, 2, 3, 4] 에는 1이 0개 있습니다.
    `,
  },
];

describe("중복된 숫자 개수", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
