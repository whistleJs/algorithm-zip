import { TestCase } from "@util/model";

import solution from "./solve";

type TestCaseInput = string;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'banana',
    answer: 3,
    description: `
      [입출력 예 #1]\n\n
      
      s = 'banana'인 경우 ba - na - na와 같이 분해됩니다.
    `,
  },
  {
    input: 'abracadabra',
    answer: 6,
    description: `
      [입출력 예 #2]\n\n
      
      s = 'abracadabra'인 경우 ab - ra - ca - da - br - a와 같이 분해됩니다.
    `,
  },
  {
    input: 'aaabbaccccabba',
    answer: 3,
    description: `
      [입출력 예 #3]\n\n
      
      s = 'aaabbaccccabba'인 경우 aaabbacc - ccab - ba와 같이 분해됩니다.
    `,
  },
];

describe('문자열 나누기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
