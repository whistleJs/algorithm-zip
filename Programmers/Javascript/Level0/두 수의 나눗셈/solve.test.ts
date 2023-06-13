import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [3, 2],
    answer: 1500,
    description: `
      [입출력 예 #1]\n\n
      
      num1이 3, num2가 2이므로 3 / 2 = 1.5에 1,000을 곱하면 1500이 됩니다.
    `,
  },
  {
    input: [7, 3],
    answer: 2333,
    description: `
      [입출력 예 #2]\n\n
      
      num1이 7, num2가 3이므로 7 / 3 = 2.33333...에 1,000을 곱하면 2333.3333.... 이 되며, 정수 부분은 2333입니다.
    `,
  },
  {
    input: [1, 16],
    answer: 62,
    description: `
      [입출력 예 #3]\n\n
      
      num1이 1, num2가 16이므로 1 / 16 = 0.0625에 1,000을 곱하면 62.5가 되며, 정수 부분은 62입니다.
    `,
  },
];

describe("두 수의 나눗셈", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
