import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [5, 1, 4],
    answer: [5, 5, 5, 5, 5, 1, 4, 4, 4, 4],
    description: `
      [입출력 예 #1]\n\n
      
      5 -	[5, 5, 5, 5, 5]\n
      1 -	[5, 5, 5, 5, 5, 1]\n
      4 -	[5, 5, 5, 5, 5, 1, 4, 4, 4, 4]\n\n

      따라서 [5, 5, 5, 5, 5, 1, 4, 4, 4, 4]를 return 합니다.
    `,
  },
  {
    input: [6, 6],
    answer: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    description: `
      [입출력 예 #2]\n\n
      
      6 -	[6, 6, 6, 6, 6, 6]\n
      6 -	[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]\n\n

      따라서 [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]를 return 합니다.
    `,
  },
  {
    input: [1],
    answer: [1],
    description: `
      [입출력 예 #3]\n\n
      
      1 - [1]\n\n

      따라서 [1]을 return 합니다.
    `,
  },
];

describe("배열의 원소만큼 추가하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
