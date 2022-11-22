import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [2, 1, 1, 2, 3, 1, 2, 3, 1],
    answer: 2,
    description: `
      [입출력 예 #1]\n\n
      
      문제 예시와 같습니다.
    `
  },
  {
    input: [1, 3, 2, 1, 2, 1, 3, 1, 2],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      상수가 포장할 수 있는 햄버거가 없습니다.
    `
  }
];

describe('햄버거 만들기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
