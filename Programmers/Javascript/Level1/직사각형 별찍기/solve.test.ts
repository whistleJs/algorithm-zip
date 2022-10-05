import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: '5 3',
    answer: `*****\n*****\n*****`,
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `
  },
];

describe('직사각형 별찍기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input).trim()).toEqual(answer);
    });
  });
});
