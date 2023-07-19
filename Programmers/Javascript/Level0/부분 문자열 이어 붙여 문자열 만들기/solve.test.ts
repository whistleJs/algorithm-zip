import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string[], number[][]];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      ["progressive", "hamburger", "hammer", "ahocorasick"],
      [[0, 4], [1, 2], [3, 5], [7, 7]],
    ],
    answer: 'programmers',
    description: `
      [입출력 예 #1]\n\n
      
      - progressive[0, 4] - progr\n
      - hamburger[1, 2] - am\n
      - hammer[3, 5] - mer\n
      - ahocorasick[7, 7] - s\n\n

      모두 합치면 'programmers'입니다.
    `,
  },
];

describe("부분 문자열 이어 붙여 문자열 만들기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
