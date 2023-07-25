import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 6,
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      6명이 모두 같은 양을 먹기 위해 한 판을 시켜야 피자가 6조각으로 모두 한 조각씩 먹을 수 있습니다.
    `,
  },
  {
    input: 10,
    answer: 5,
    description: `
      [입출력 예 #2]\n\n
      
      10명이 모두 같은 양을 먹기 위해 최소 5판을 시켜야 피자가 30조각으로 모두 세 조각씩 먹을 수 있습니다.
    `,
  },
  {
    input: 4,
    answer: 2,
    description: `
      [입출력 예 #3]\n\n
      
      4명이 모두 같은 양을 먹기 위해 최소 2판을 시키면 피자가 12조각으로 모두 세 조각씩 먹을 수 있습니다.
    `,
  },
];

describe("피자 나눠 먹기 (2)", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
