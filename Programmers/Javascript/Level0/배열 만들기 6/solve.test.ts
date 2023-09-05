import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [0, 1, 1, 1, 0],
    answer: [0, 1, 0],
    description: `
      [입출력 예 #1]\n\n
      
      각 작업을 마친 후에 배열의 변화를 나타내면 다음과 같습니다.

      - []\n
      - [0]\n
      - [0, 1]\n
      - [0]\n
      - [0, 1]\n
      - [0, 1, 0]\n\n

      따라서 [0, 1, 0]을 return 합니다.
    `,
  },
  {
    input: [0, 1, 0, 1, 0],
    answer: [0, 1, 0, 1, 0],
    description: `
      [입출력 예 #2]\n\n
      
      각 작업을 마친 후에 배열의 변화를 나타내면 다음과 같습니다.

      - []\n
      - [0]\n
      - [0, 1]\n
      - [0, 1, 0]\n
      - [0, 1, 0, 1]\n\
      - [0, 1, 0, 1, 0]\n\n

      따라서 [0, 1, 0, 1, 0]을 return 합니다.
    `,
  },
  {
    input: [0, 1, 1, 0],
    answer: [-1],
    description: `
      [입출력 예 #3]\n\n
      
      각 작업을 마친 후에 배열의 변화를 나타내면 다음과 같습니다.

      - []\n
      - [0]\n
      - [0, 1]\n
      - [0]\n
      - []\n\n

      마지막에 빈 배열이 되었으므로 [-1]을 return 합니다.
    `,
  },
];

describe("배열 만들기 6", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
