import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [3, 4, 5, 2, 1],
    answer: 393,
    description: `
      [입출력 예 #1]\n\n
      
      홀수만 이어 붙인 수는 351이고 짝수만 이어 붙인 수는 42입니다. 두 수의 합은 393입니다.
    `,
  },
  {
    input: [5, 7, 8, 3],
    answer: 581,
    description: `
      [입출력 예 #2]\n\n
      
      홀수만 이어 붙인 수는 573이고 짝수만 이어 붙인 수는 8입니다. 두 수의 합은 581입니다.
    `,
  },
];

describe("이어 붙인 수", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
