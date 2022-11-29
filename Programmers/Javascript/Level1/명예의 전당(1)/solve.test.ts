import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number[]];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      3,
      [10, 100, 20, 150, 1, 100, 200]
    ],
    answer: [10, 10, 10, 20, 20, 100, 100],
    description: `
      [입출력 예 #1]\n\n
      
      문제의 예시와 같습니다.
    `
  },
  {
    input: [
      4,
      [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]
    ],
    answer: [0, 0, 0, 0, 20, 40, 70, 70, 150, 300],
    description: `
      [입출력 예 #2]\n\n
      
      설명 없습니다.
    `
  }
];

describe('명예의 전당(1)', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
