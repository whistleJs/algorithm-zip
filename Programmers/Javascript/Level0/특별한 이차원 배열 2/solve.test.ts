import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[][];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [[5, 192, 33], [192, 72, 95], [33, 95, 999]],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      조건을 만족하므로 1을 return 합니다.
    `,
  },
  {
    input: [[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 arr에서 arr[0][1] = 498 ≠ 63 = arr[1][0]이므로 조건을 만족하지 않습니다. 따라서 0을 return 합니다.
    `,
  },
];

describe("특별한 이차원 배열 2", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
