import { TestCase } from "@util/model";

import solution from "./solve";

type TestCaseInput = number[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 1, 3, 3, 0, 1, 1],
    answer: [1, 3, 0, 1],
    description: `
      [입출력 예 #1]\n\n
      
      문제의 예시와 같습니다.
    `,
  },
  {
    input: [4, 4, 4, 3, 3],
    answer: [4, 3],
    description: `
      [입출력 예 #2]\n\n
      
      문제의 예시와 같습니다.
    `,
  },
];

describe("같은 숫자는 싫어", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
