import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: '01033334444',
    answer: '*******4444',
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `
  },
  {
    input: '027778888',
    answer: '*****8888',
    description: `
      [입출력 예 #2]\n\n
      
      설명 없습니다.
    `
  }
];

describe('핸드폰 번호 가리기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
