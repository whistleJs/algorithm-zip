import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'Zbcdefg',
    answer: 'gfedcbZ',
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `
  },
];

describe('문자열 내림차순으로 배치하기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
