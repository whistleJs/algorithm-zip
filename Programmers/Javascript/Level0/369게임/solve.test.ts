import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 3,
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      3은 3이 1개 있으므로 1을 출력합니다.
    `,
  },
  {
    input: 29423,
    answer: 2,
    description: `
      [입출력 예 #2]\n\n
      
      29423은 3이 1개, 9가 1개 있으므로 2를 출력합니다.
    `,
  },
];

describe("369게임", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
