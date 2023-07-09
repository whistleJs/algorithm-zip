import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['banana', 'ana'],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      문제 설명과 같습니다.
    `,
  },
  {
    input: ['banana', 'wxyz'],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      문제 설명과 같습니다.
    `,
  },
];

describe("부분 문자열인지 확인하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
