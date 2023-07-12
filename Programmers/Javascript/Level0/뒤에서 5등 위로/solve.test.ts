import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [12, 4, 15, 46, 38, 1, 14, 56, 32, 10],
    answer: [15, 32, 38, 46, 56],
    description: `
      [입출력 예 #1]\n\n
      
      [12, 4, 15, 46, 38, 1, 14, 56, 32, 10]를 정렬하면 [1, 4, 10, 12, 14, 15, 32, 38, 46, 56]이 되고, 앞에서 부터 6번째 이후의 수들을 고르면 [15, 32, 38, 46, 56]가 됩니다.
    `,
  },
];

describe("뒤에서 5등 위로", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
