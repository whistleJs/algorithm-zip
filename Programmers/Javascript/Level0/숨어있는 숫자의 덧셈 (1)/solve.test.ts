import { TestCase } from "@util/model";

import solution from "./solve";

type TestCaseInput = string;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'aAb1B2cC34oOp',
    answer: 10,
    description: `
      [입출력 예 #1]\n\n
      
      'aAb1B2cC34oOp'안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.
    `,
  },
  {
    input: '1a2b3c4d123',
    answer: 16,
    description: `
      [입출력 예 #2]\n\n
      
      '1a2b3c4d123Z'안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.
    `,
  },
];

describe("숨어있는 숫자의 덧셈 (1)", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
