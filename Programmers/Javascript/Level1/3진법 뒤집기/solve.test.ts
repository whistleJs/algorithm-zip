import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 45,
    answer: 7,
    description: `
      [입출력 예 #1]\n\n
      
      10진법: 45\n
      3진법: 1200\n
      앞뒤반전 3진법: 0021\n
      10진법: 7
    `
  },
  {
    input: 125,
    answer: 229,
    description: `
      [입출력 예 #2]\n\n
      
      10진법: 125\n
      3진법: 11122\n
      앞뒤반전 3진법: 22111\n
      10진법: 229
    `
  },
];

describe('3진법 뒤집기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
