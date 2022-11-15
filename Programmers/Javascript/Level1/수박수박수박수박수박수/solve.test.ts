import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 3,
    answer: '수박수',
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `
  },
  {
    input: 4,
    answer: '수박수박',
    description: `
      [입출력 예 #2]\n\n
      
      설명 없습니다.
    `
  },
];

describe('수박수박수박수박수박수?', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
