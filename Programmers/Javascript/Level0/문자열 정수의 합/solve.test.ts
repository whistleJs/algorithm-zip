import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: '123456789',
    answer: 45,
    description: `
      [입출력 예 #1]\n\n
      
      문자열 안의 모든 숫자를 더하면 45가 됩니다.
    `,
  },
  {
    input: '1000000',
    answer: 1,
    description: `
      [입출력 예 #2]\n\n
      
      문자열 안의 모든 숫자를 더하면 1이 됩니다.
    `,
  },
];

describe("문자열 정수의 합", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
