import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [10, 3],
    answer: [3, 6, 9],
    description: `
      [입출력 예 #1]\n\n
      
      1 이상 10 이하의 3의 배수는 3, 6, 9 이므로 [3, 6, 9]를 return 합니다.
    `,
  },
  {
    input: [15, 5],
    answer: [5, 10, 15],
    description: `
      [입출력 예 #2]\n\n
      
      1 이상 15 이하의 5의 배수는 5, 10, 15 이므로 [5, 10, 15]를 return 합니다.
    `,
  },
];

describe("배열 만들기 1", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
