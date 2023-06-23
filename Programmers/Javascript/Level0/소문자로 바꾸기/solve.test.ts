import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'aBcDeFg',
    answer: 'abcdefg',
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `,
  },
  {
    input: 'aaa',
    answer: 'aaa',
    description: `
      [입출력 예 #2]\n\n
      
      설명 없습니다.
    `,
  },
];

describe("소문자로 바꾸기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
