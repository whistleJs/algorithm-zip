import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [3, 2],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      num1이 3, num2가 2이므로 3을 2로 나눈 나머지 1을 return 합니다.
    `,
  },
  {
    input: [10, 5],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      num1이 10, num2가 5이므로 10을 5로 나눈 나머지 0을 return 합니다.
    `,
  },
];

describe("나머지 구하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
