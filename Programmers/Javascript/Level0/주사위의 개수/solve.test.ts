import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [[number, number, number], number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [[1, 1, 1], 1],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      상자의 크기가 가로 1, 세로 1, 높이 1이므로 모서리의 길이가 1인 주사위는 1개 들어갈 수 있습니다.
    `,
  },
  {
    input: [[10, 8, 6], 3],
    answer: 12,
    description: `
      [입출력 예 #2]\n\n
      
      상자의 크기가 가로 10, 세로 8, 높이 6이므로 모서리의 길이가 3인 주사위는 12개 들어갈 수 있습니다.
    `,
  },
];

describe("주사위의 개수", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
