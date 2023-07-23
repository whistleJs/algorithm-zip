import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = [number, number];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 8, 3],
    answer: [8, 1],
    description: `
      [입출력 예 #1]\n\n
      
      1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.
    `,
  },
  {
    input: [9, 10, 11, 8],
    answer: [11, 2],
    description: `
      [입출력 예 #2]\n\n
      
      9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.
    `,
  },
];

describe("가장 큰 수 찾기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
