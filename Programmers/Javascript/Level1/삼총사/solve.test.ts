import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [-2, 3, 0, 2, -5],
    answer: 2,
    description: `
      [입출력 예 #1]\n\n
      
      문제 예시와 같습니다.
    `
  },
  {
    input: [-3, -2, -1, 0, 1, 2, 3],
    answer: 5,
    description: `
      [입출력 예 #2]\n\n
      
      학생들의 정수 번호 쌍 (-3, 0, 3), (-2, 0, 2), (-1, 0, 1), (-2, -1, 3), (-3, 1, 2) 이 삼총사가 될 수 있으므로, 5를 return 합니다.
    `
  },
  {
    input: [-1, 1, -1, 1],
    answer: 0,
    description: `
      [입출력 예 #3]\n\n
      
      삼총사가 될 수 있는 방법이 없습니다.
    `
  },
];

describe('삼총사', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
