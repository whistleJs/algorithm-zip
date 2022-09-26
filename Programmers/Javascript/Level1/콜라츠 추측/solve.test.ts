import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 6,
    answer: 8,
    description: `
      [입출력 예 #1]\n\n
      
      문제의 설명과 같습니다.
    `
  },
  {
    input: 16,
    answer: 4,
    description: `
      [입출력 예 #2]\n\n
      
      16 → 8 → 4 → 2 → 1 이 되어 총 4번 만에 1이 됩니다.
    `
  },
  {
    input: 626331,
    answer: -1,
    description: `
      [입출력 예 #3]\n\n
      
      626331은 500번을 시도해도 1이 되지 못하므로 -1을 리턴해야 합니다.
    `
  }
];

describe('콜라츠 추측', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
