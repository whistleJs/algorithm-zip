import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [7, 77, 17],
    answer: 4,
    description: `
      [입출력 예 #1]\n\n
      
      [7, 77, 17]에는 7이 4개 있으므로 4를 return 합니다.
    `,
  },
  {
    input: [10, 29],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      [10, 29]에는 7이 없으므로 0을 return 합니다.
    `,
  },
];

describe("7의 개수", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
