import { TestCase } from "@util/model";

import solution from "./solve";

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 3, 4],
    answer: 2.5,
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `,
  },
  {
    input: [5, 5],
    answer: 5,
    description: `
      [입출력 예 #2]\n\n
      
      설명 없습니다.
    `,
  },
];

describe("평균 구하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
