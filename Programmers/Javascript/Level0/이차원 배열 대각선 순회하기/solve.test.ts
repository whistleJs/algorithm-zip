import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[][], number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]],
      2
    ],
    answer: 8,
    description: `
      [입출력 예 #1]\n\n
      
      i + j가 2보다 작거나 같은 항들의 합은 0 + 1 + 2 + 1 + 2 + 2 = 8이므로 8을 return 합니다.
    `,
  },
];

describe("이차원 배열 대각선 순회하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
