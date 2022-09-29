import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'abcde',
    answer: 'c',
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `
  },
  {
    input: 'qwer',
    answer: 'we',
    description: `
      [입출력 예 #2]\n\n
      
      설명 없습니다.
    `
  },
];

describe('가운데 글자 가져오기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
