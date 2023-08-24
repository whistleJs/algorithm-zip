import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number[][]];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [0, 1, 2, 4, 3],
      [[0, 4, 1],[0, 3, 2],[0, 3, 3]]
    ],
    answer: [3, 2, 4, 6, 4],
    description: `
      [입출력 예 #1]\n\n
      
      각 쿼리에 따라 arr가 다음과 같이 변합니다.\n\n

      - [0, 1, 2, 4, 3]\n
      - [1, 2, 3, 5, 4]\n
      - [2, 2, 4, 5, 4]\n
      - [3, 2, 4, 6, 4]\n\n

      따라서 [3, 2, 4, 6, 4]를 return 합니다.
    `,
  },
];

describe("수열과 구간 쿼리 4", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
