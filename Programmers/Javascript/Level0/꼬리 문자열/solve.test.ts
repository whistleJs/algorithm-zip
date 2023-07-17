import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string[], string];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      ['abc', 'def', 'ghi'],
      'ef'
    ],
    answer: 'abcghi',
    description: `
      [입출력 예 #1]\n\n
      
      본문과 동일합니다.
    `,
  },
  {
    input: [
      ['abc', 'bbc', 'cbc'],
      'c'
    ],
    answer: '',
    description: `
      [입출력 예 #2]\n\n
      
      리스트 안의 모든 문자열이 'c'를 포함하므로 빈 문자열을 return합니다.
    `,
  },
];

describe("꼬리 문자열", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
