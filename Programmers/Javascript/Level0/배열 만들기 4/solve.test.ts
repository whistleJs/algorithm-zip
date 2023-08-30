import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 4, 2, 5, 3],
    answer: [1, 2, 3],
    description: `
      [입출력 예 #1]\n\n
      
      각 작업을 마친 후에 배열의 변화를 나타내면 다음 표와 같습니다.\n\n
      
      - []\n
      - [1]\n
      - [1, 4]\n
      - [1]\n
      - [1, 2]\n
      - [1, 2, 5]\n
      - [1, 2]\n
      -	[1, 2, 3]\n\n

      따라서 [1, 2, 3]을 return 합니다.
    `,
  },
];

describe("배열 만들기 4", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
