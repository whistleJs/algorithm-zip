import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1],
    answer: 51,
    description: `
      [입출력 예 #1]\n\n
      
      리스트의 길이가 13이므로 모든 원소의 합인 51을 return합니다.
    `,
  },
  {
    input: [2, 3, 4, 5],
    answer: 120,
    description: `
      [입출력 예 #2]\n\n
      
      리스트의 길이가 4이므로 모든 원소의 곱인 120을 return합니다.
    `,
  },
];

describe("길이에 따른 연산", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
