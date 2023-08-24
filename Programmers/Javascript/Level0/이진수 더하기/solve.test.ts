import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['10', '11'],
    answer: '101',
    description: `
      [입출력 예 #1]\n\n
      
      10 + 11 = 101 이므로 '101' 을 return합니다.
    `,
  },
  {
    input: ['1001', '1111'],
    answer: '11000',
    description: `
      [입출력 예 #2]\n\n
      
      1001 + 1111 = 11000 이므로 '11000'을 return합니다.
    `,
  },
];

describe("이진수 더하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
