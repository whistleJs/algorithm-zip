import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 7,
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      7명이 최소 한 조각씩 먹기 위해서 최소 1판이 필요합니다.
    `,
  },
  {
    input: 1,
    answer: 1,
    description: `
      [입출력 예 #2]\n\n
      
      1명은 최소 한 조각을 먹기 위해 1판이 필요합니다.
    `,
  },
  {
    input: 15,
    answer: 3,
    description: `
      [입출력 예 #3]\n\n
      
      15명이 최소 한 조각씩 먹기 위해서 최소 3판이 필요합니다.
    `,
  },
];

describe("피자 나눠 먹기(1)", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
