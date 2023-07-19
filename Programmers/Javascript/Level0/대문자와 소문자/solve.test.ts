import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'cccCCC',
    answer: 'CCCccc',
    description: `
      [입출력 예 #1]\n\n
      
      소문자는 대문자로 대문자는 소문자로 바꾼 'CCCccc'를 return합니다.
    `,
  },
  {
    input: 'abCdEfghIJ',
    answer: 'ABcDeFGHij',
    description: `
      [입출력 예 #2]\n\n
      
      소문자는 대문자로 대문자는 소문자로 바꾼 'ABcDeFGHij'를 return합니다.
    `,
  },
];

describe("대문자와 소문자", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
