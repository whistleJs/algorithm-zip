import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number[][];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      2
    ],
    answer: [[1, 2], [3, 4], [5, 6], [7, 8]],
    description: `
      [입출력 예 #1]\n\n
      
      num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 2 * 4 배열로 변경한 [[1, 2], [3, 4], [5, 6], [7, 8]] 을 return합니다.
    `,
  },
  {
    input: [
      [100, 95, 2, 4, 5, 6, 18, 33, 948],
      3
    ],
    answer: [[100, 95, 2], [4, 5, 6], [18, 33, 948]],
    description: `
      [입출력 예 #2]\n\n
      
      num_list가 [100, 95, 2, 4, 5, 6, 18, 33, 948] 로 길이가 9이고 n이 3이므로 3 * 3 배열로 변경한 [[100, 95, 2], [4, 5, 6], [18, 33, 948]] 을 return합니다.
    `,
  },
];

describe("2차원으로 만들기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
