import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [2, 3],
    answer: 5,
    description: `
      [입출력 예 #1]\n\n
      
      num1이 2이고 num2가 3이므로 2 + 3 = 5를 return합니다.
    `,
  },
  {
    input: [100, 2],
    answer: 102,
    description: `
      [입출력 예 #2]\n\n
      
      num1이 100이고 num2가 2이므로 100 + 2 = 102를 return합니다.
    `,
  },
];

describe("두 수의 합", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
