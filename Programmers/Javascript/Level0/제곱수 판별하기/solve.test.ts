import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 144,
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      144는 12의 제곱이므로 제곱수입니다. 따라서 1을 return합니다.
    `,
  },
  {
    input: 976,
    answer: 2,
    description: `
      [입출력 예 #2]\n\n
      
      976은 제곱수가 아닙니다. 따라서 2를 return합니다.
    `,
  },
];

describe("제곱수 판별하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
