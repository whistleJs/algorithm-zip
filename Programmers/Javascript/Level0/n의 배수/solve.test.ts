import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [98, 2],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      98은 2의 배수이므로 1을 return합니다.
    `,
  },
  {
    input: [34, 3],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      32는 3의 배수가 아니므로 0을 return합니다.
    `,
  },
];

describe("n의 배수", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
