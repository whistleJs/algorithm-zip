import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number, number];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [1, 2, 3, 4, 5],
      1,
      3
    ],
    answer: [2, 3, 4],
    description: `
      [입출력 예 #1]\n\n
      
      [1, 2, 3, 4, 5]의 1번째 인덱스 2부터 3번째 인덱스 4 까지 자른 [2, 3, 4]를 return 합니다.
    `,
  },
  {
    input: [
      [1, 3, 5],
      1,
      2
    ],
    answer: [3, 5],
    description: `
      [입출력 예 #2]\n\n
      
      [1, 3, 5]의 1번째 인덱스 3부터 2번째 인덱스 5까지 자른 [3, 5]를 return 합니다.
    `,
  },
];

describe("배열 자르기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
