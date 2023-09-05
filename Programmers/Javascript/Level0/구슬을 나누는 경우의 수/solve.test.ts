import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [3, 2],
    answer: 3,
    description: `
      [입출력 예 #1]\n\n
      
      서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다.
    `,
  },
  {
    input: [5, 3],
    answer: 10,
    description: `
      [입출력 예 #2]\n\n
      
      서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다.
    `,
  },
];

describe("구슬을 나누는 경우의 수", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
