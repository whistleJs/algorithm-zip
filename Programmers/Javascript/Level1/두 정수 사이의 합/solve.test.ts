import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [3, 5],
    answer: 12,
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `
  },
  {
    input: [3, 3],
    answer: 3,
    description: `
      [입출력 예 #2]\n\n
      
      설명 없습니다.
    `
  },
  {
    input: [5, 3],
    answer: 12,
    description: `
      [입출력 예 #3]\n\n
      
      설명 없습니다.
    `
  },
];

describe('두 정수 사이의 합', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
