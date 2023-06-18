import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 3, 100, 99, 98],
    answer: [2, 2, 6, 50, 99, 49],
    description: `
      [입출력 예 #1]\n\n
      
      1, 3은 50 미만의 홀수 이므로 2를 곱하고, 100, 98은 50 이상의 짝수이므로 2로 나눕니다.\n
      나머지 값들은 변경 조건에 해당하지 않으므로 바꾸지 않습니다.\n
      따라서 [2, 2, 6, 50, 99, 49]를 return 합니다.
    `,
  },
];

describe("조건에 맞게 수열 변환하기1", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
