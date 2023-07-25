import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'oxooxoxxox',
    answer: [1, 2, 1, 0, 1, 0],
    description: `
      [입출력 예 #1]\n\n
      
      'x'를 기준으로 문자열을 나누면 ['o', 'oo', 'o', '', 'o', '']가 됩니다. 각각의 길이로 배열을 만들면 [1, 2, 1, 0, 1, 0]입니다. 따라서 [1, 2, 1, 0, 1, 0]을 return 합니다.
    `,
  },
  {
    input: 'xabcxdefxghi',
    answer: [0, 3, 3, 3],
    description: `
      [입출력 예 #2]\n\n
      
      'x'를 기준으로 문자열을 나누면 ['', 'abc', 'def', 'ghi']가 됩니다. 각각의 길이로 배열을 만들면 [0, 3, 3, 3]입니다. 따라서 [0, 3, 3, 3]을 return 합니다.
    `,
  },
];

describe("x 사이의 개수", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
