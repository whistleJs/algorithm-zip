import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [12, 4, 15, 46, 38, -2, 15],
    answer: 5,
    description: `
      [입출력 예 #1]\n\n
      
      60은 2의 배수이면서 3의 배수이기 때문에 1을 return합니다.
    `,
  },
  {
    input: [13, 22, 53, 24, 15, 6],
    answer: -1,
    description: `
      [입출력 예 #2]\n\n
      
      음수가 없으므로 -1을 return합니다.
    `,
  },
];

describe("첫 번째로 나오는 음수", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
