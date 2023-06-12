import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [10, 5],
    answer: 2,
    description: `
      [입출력 예 #1]\n\n
      
      num1이 10, num2가 5이므로 10을 5로 나눈 몫 2를 return 합니다.
    `,
  },
  {
    input: [7, 2],
    answer: 3,
    description: `
      [입출력 예 #2]\n\n
      
      num1이 7, num2가 2이므로 7을 2로 나눈 몫 3을 return 합니다.
    `,
  },
];

describe("몫 구하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
