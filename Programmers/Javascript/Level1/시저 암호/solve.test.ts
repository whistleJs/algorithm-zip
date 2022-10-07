import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, number];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['AB', 1],
    answer: 'BC',
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `
  },
  {
    input: ['z', 1],
    answer: 'a',
    description: `
      [입출력 예 #2]\n\n
      
      설명 없습니다.
    `
  },
  {
    input: ['a B z', 4],
    answer: 'e F d',
    description: `
      [입출력 예 #3]\n\n
      
      설명 없습니다.
    `
  },
];

describe('시저 암호', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
