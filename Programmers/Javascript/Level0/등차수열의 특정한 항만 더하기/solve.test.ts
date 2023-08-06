import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number, boolean[]];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      3, 4,
      [true, false, false, true, true]
    ],
    answer: 37,
    description: `
      [입출력 예 #1]\n\n
      
      1항, 4항, 5항을 더한 3 + 15 + 19 = 37을 return 합니다.
    `,
  },
  {
    input: [
      7, 1,
      [false, false, false, true, false, false, false]
    ],
    answer: 10,
    description: `
      [입출력 예 #2]\n\n
      
      4항만 true이므로 10을 return 합니다.
    `,
  },
];

describe("등차수열의 특정한 항만 더하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
