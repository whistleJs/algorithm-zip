import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 10,
    answer: [1, 3, 5, 7, 9],
    description: `
      [입출력 예 #1]\n\n
      
      10 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9]를 return합니다.
    `,
  },
  {
    input: 15,
    answer: [1, 3, 5, 7, 9, 11, 13, 15],
    description: `
      [입출력 예 #2]\n\n
      
      15 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9, 11, 13, 15]를 return합니다.
    `,
  },
];

describe("짝수는 싫어요", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
