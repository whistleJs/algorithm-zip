import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [4, 2, 6, 1, 7, 6],
      2
    ],
    answer: [4, 6, 7],
    description: `
      [입출력 예 #1]\n\n
      
      [4, 2, 6, 1, 7, 6]에서 2개 간격으로 저장되어 있는 원소들은 [4, 6, 7]입니다.
    `,
  },
  {
    input: [
      [4, 2, 6, 1, 7, 6],
      4
    ],
    answer: [4, 7],
    description: `
      [입출력 예 #2]\n\n
      
      [4, 2, 6, 1, 7, 6]에서 4개 간격으로 저장되어 있는 원소들은 [4, 7]입니다.
    `,
  },
];

describe("n개 간격의 원소들", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
