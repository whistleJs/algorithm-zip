import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = [number, number];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 5500,
    answer: [1, 0],
    description: `
      [입출력 예 #1]\n\n
      
      5,500원은 아이스 아메리카노 한 잔을 살 수 있고 잔돈은 0원입니다.
    `,
  },
  {
    input: 15000,
    answer: [2, 4000],
    description: `
      [입출력 예 #2]\n\n
      
      15,000원은 아이스 아메리카노 두 잔을 살 수 있고 잔돈은 4,000원입니다.
    `,
  },
];

describe("아이스 아메리카노", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
