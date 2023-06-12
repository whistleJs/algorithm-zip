import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [3, 4],
    answer: 12,
    description: `
      [입출력 예 #1]\n\n
      
      num1이 3, num2가 4이므로 3 * 4 = 12를 return합니다.
    `,
  },
  {
    input: [27, 19],
    answer: 513,
    description: `
      [입출력 예 #2]\n\n
      
      num1이 27, num2가 19이므로 27 * 19 = 513을 return합니다.
    `,
  },
];

describe("두 수의 곱", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
