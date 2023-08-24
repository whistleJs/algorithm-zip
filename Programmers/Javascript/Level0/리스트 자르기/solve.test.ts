import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, [number, number, number], number[]];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      3,
      [1, 5, 2],
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ],
    answer: [2, 3, 4, 5, 6],
    description: `
      [입출력 예 #1]\n\n
      
      [1, 2, 3, 4, 5, 6, 7, 8, 9]에서 1번 인덱스부터 5번 인덱스까지 자른 리스트는 [2, 3, 4, 5, 6]입니다.
    `,
  },
  {
    input: [
      4,
      [1, 5, 2],
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ],
    answer: [2, 4, 6],
    description: `
      [입출력 예 #2]\n\n
      
      [1, 2, 3, 4, 5, 6, 7, 8, 9]에서 1번 인덱스부터 5번 인덱스까지 2개 간격으로 자른 리스트는 [2, 4, 6]입니다.
    `,
  },
];

describe("리스트 자르기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
