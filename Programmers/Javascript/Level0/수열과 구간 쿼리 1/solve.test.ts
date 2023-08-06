import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number[][]];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [0, 1, 2, 3, 4],
      [[0, 1],[1, 2],[2, 3]]
    ],
    answer: [1, 3, 4, 4, 4],
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `,
  },
];

describe("수열과 구간 쿼리 1", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
