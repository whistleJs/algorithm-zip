import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, -3, 4, -5],
    answer: 15,
    description: `
      [입출력 예 #1]\n\n
      
      두 수의 곱중 최댓값은 -3 * -5 = 15 입니다.
    `,
  },
  {
    input: [0, -31, 24, 10, 1, 9],
    answer: 240,
    description: `
      [입출력 예 #2]\n\n
      
      두 수의 곱중 최댓값은 10 * 24 = 240 입니다.
    `,
  },
  {
    input: [10, 20, 30, 5, 5, 20, 5],
    answer: 600,
    description: `
      [입출력 예 #3]\n\n
      
      두 수의 곱중 최댓값은 20 * 30 = 600 입니다.
    `,
  },
];

describe("최댓값 만들기 (2)", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
