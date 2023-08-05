import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['aaaaa', 'bbbbb'],
    answer: 'ababababab',
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `,
  },
];

describe("문자열 섞기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
