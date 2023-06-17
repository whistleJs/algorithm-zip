import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = [number, number];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 3, 4, 5],
    answer: [2, 3],
    description: `
      [입출력 예 #1]\n\n
      
      [1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.
    `,
  },
  {
    input: [1, 3, 5, 7],
    answer: [0, 4],
    description: `
      [입출력 예 #2]\n\n
      
      [1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.
    `,
  },
];

describe("짝수 홀수 개수", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
