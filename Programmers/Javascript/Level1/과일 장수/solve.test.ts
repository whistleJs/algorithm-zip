import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number, number[]];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [3, 4, [1, 2, 3, 1, 2, 3, 1]],
    answer: 8,
    description: `
      [입출력 예 #1]\n\n
      
      문제의 예시와 같습니다.
    `
  },
  {
    input: [4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]],
    answer: 33,
    description: `
      [입출력 예 #2]\n\n
      
      (1 x 3 x 1) + (2 x 3 x 1) + (4 x 3 x 2) = 33을 return합니다.
    `
  }
];

describe('과일 장수', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
