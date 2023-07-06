import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['ab6CDE443fgh22iJKlmn1o', '6CD'],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      'ab6CDE443fgh22iJKlmn1o' str1에 str2가 존재하므로 1을 return합니다.
    `,
  },
  {
    input: ['ppprrrogrammers', 'pppp'],
    answer: 2,
    description: `
      [입출력 예 #2]\n\n
      
      'ppprrrogrammers' str1에 str2가 없으므로 2를 return합니다.
    `,
  },
  {
    input: ['AbcAbcA', 'AAA'],
    answer: 2,
    description: `
      [입출력 예 #3]\n\n
      
      'AbcAbcA' str1에 str2가 없으므로 2를 return합니다.
    `,
  },
];

describe("문자열안에 문자열", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
