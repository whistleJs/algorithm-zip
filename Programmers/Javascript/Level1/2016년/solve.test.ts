import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [5, 24],
    answer: 'TUE',
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `
  },
];

describe('2016년', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
