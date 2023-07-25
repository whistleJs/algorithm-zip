import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 3, 4, 5],
    answer: 20,
    description: `
      [입출력 예 #1]\n\n
      
      두 수의 곱중 최댓값은 4 * 5 = 20 입니다.
    `,
  },
  {
    input: [0, 31, 24, 10, 1, 9],
    answer: 744,
    description: `
      [입출력 예 #2]\n\n
      
      두 수의 곱중 최댓값은 31 * 24 = 744 입니다.
    `,
  },
];

describe("최댓값 만들기(1)", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
