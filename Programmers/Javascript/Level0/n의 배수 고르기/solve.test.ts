import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number[]];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      3,
      [4, 5, 6, 7, 8, 9, 10, 11, 12]
    ],
    answer: [6, 9, 12],
    description: `
      [입출력 예 #1]\n\n
      
      numlist에서 3의 배수만을 남긴 [6, 9, 12]를 return합니다.
    `,
  },
  {
    input: [
      5,
      [1, 9, 3, 10, 13, 5]
    ],
    answer: [10, 5],
    description: `
      [입출력 예 #2]\n\n
      
      numlist에서 5의 배수만을 남긴 [10, 5]를 return합니다.
    `,
  },
  {
    input: [
      12,
      [2, 100, 120, 600, 12, 12]
    ],
    answer: [120, 600, 12, 12],
    description: `
      [입출력 예 #3]\n\n
      
      numlist에서 12의 배수만을 남긴 [120, 600, 12, 12]를 return합니다.
    `,
  },
];

describe("n의 배수 고르기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
