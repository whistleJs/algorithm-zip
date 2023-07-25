import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [7, 10],
    answer: 2,
    description: `
      [입출력 예 #1]\n\n
      
      10명이 7조각으로 자른 피자를 한 조각 이상씩 먹으려면 최소 2판을 시켜야 합니다.
    `,
  },
  {
    input: [4, 12],
    answer: 3,
    description: `
      [입출력 예 #2]\n\n
      
      12명이 4조각으로 자른 피자를 한 조각 이상씩 먹으려면 최소 3판을 시켜야 합니다.
    `,
  },
];

describe("피자 나눠 먹기(3)", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
