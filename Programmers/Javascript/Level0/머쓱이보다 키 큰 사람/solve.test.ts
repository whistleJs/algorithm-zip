import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [149, 180, 192, 170],
      167
    ],
    answer: 3,
    description: `
      [입출력 예 #1]\n\n
      
      149, 180, 192, 170 중 머쓱이보다 키가 큰 사람은 180, 192, 170으로 세 명입니다.
    `,
  },
  {
    input: [
      [180, 120, 140],
      190
    ],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      180, 120, 140 중 190보다 큰 수는 없으므로 0명입니다.
    `,
  },
];

describe("머쓱이보다 키 큰 사람", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
