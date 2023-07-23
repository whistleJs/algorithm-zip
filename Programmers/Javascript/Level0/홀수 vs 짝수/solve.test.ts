import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [4, 2, 6, 1, 7, 6],
    answer: 17,
    description: `
      [입출력 예 #1]\n\n
      
      홀수 번째 원소들의 합은 4 + 6 + 7 = 17, 짝수 번째 원소들의 합은 2 + 1 + 6 = 9 이므로 17을 return합니다.
    `,
  },
  {
    input: [-1, 2, 5, 6, 3],
    answer: 8,
    description: `
      [입출력 예 #2]\n\n
      
      홀수 번째 원소들의 합은 -1 + 5 + 3 = 7, 짝수 번째 원소들의 합은 2 + 6 = 8 이므로 8을 return합니다.
    `,
  },
];

describe("홀수 vs 짝수", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
