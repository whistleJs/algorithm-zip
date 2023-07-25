import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [2, 91],
    answer: 364,
    description: `
      [입출력 예 #1]\n\n
      
      a ⊕ b = 291 이고, 2 * a * b = 364 입니다. 둘 중 더 큰 값은 364 이므로 364를 return 합니다.
    `,
  },
  {
    input: [91, 2],
    answer: 912,
    description: `
      [입출력 예 #2]\n\n
      
      a ⊕ b = 912 이고, 2 * a * b = 364 입니다. 둘 중 더 큰 값은 912 이므로 912를 return 합니다.
    `,
  },
];

describe("두 수의 연산값 비교하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
