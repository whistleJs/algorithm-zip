import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 10,
    answer: [10, 5, 16, 8, 4, 2, 1],
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `,
  },
];

describe("콜라츠 수열 만들기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
