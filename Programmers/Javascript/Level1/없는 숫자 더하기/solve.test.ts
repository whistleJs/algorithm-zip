import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 3, 4, 6, 7, 8, 0],
    answer: 14,
    description: `
      [입출력 예 #1]\n\n
      
      5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
    `
  },
  {
    input: [5, 8, 4, 0, 6, 7, 9],
    answer: 6,
    description: `
      [입출력 예 #2]\n\n
      
      1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.
    `
  }
];

describe('없는 숫자 더하기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
