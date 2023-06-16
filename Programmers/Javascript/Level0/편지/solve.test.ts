import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'happy birthday!',
    answer: 30,
    description: `
      [입출력 예 #1]\n\n
      
      message의 글자 수가 15개로 최소 가로 30cm의 편지지가 필요합니다.
    `,
  },
  {
    input: "I love you~",
    answer: 22,
    description: `
      [입출력 예 #2]\n\n
      
      message의 글자 수가 11개로 최소 가로 22cm의 편지지가 필요합니다.
    `,
  },
];

describe("편지", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
