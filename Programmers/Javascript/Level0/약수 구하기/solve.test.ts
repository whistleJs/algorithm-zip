import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 24,
    answer: [1, 2, 3, 4, 6, 8, 12, 24],
    description: `
      [입출력 예 #1]\n\n
      
      24의 약수를 오름차순으로 담은 배열 [1, 2, 3, 4, 6, 8, 12, 24]를 return합니다.
    `,
  },
  {
    input: 29,
    answer: [1, 29],
    description: `
      [입출력 예 #2]\n\n
      
      29의 약수를 오름차순으로 담은 배열 [1, 29]를 return합니다.
    `,
  },
];

describe("약수 구하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
