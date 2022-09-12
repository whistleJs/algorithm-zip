import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 123,
    answer: 6,
    description: `
      [입출력 예 #1]\n\n
      
      문제의 예시와 같습니다.
    `
  },
  {
    input: 987,
    answer: 24,
    description: `
      [입출력 예 #2]\n\n
      
      9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.
    `
  }
];

describe('자릿수 더하기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
