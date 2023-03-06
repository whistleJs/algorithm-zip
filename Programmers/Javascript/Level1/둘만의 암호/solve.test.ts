import { TestCase } from "@util/model";

import solution from "./solve";

type TestCaseInput = [string, string, number];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['aukks', 'wbqd', 5],
    answer: 'happy',
    description: `
      [입출력 예 #1]\n\n
      
      본문 내용과 일치합니다.
    `,
  },
];

describe("둘만의 암호", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
