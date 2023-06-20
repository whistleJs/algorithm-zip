import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [60, 2, 3],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      60은 2의 배수이면서 3의 배수이기 때문에 1을 return합니다.
    `,
  },
  {
    input: [55, 10, 5],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      55는 5의 배수이지만 10의 배수가 아니기 때문에 0을 return합니다.
    `,
  },
];

describe("공배수", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
