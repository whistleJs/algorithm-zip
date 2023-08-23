import { TestCase } from "@util/model";

import solution from "./solve";

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [12, 4, 15, 1, 14],
    answer: 11,
    description: `
      [입출력 예 #1]\n\n
      
      12는 3번, 4는 2번, 15는 3번, 1은 0번, 14는 3번의 연산이 필요하기 때문에 총 11번의 연산이 필요합니다.
    `,
  },
];

describe("1로 만들기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
