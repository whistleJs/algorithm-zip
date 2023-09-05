import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      두 변이 1, 2 인 경우 삼각형을 완성시키려면 나머지 한 변이 2여야 합니다. 따라서 1을 return합니다.
    `,
  },
  {
    input: [3, 6],
    answer: 5,
    description: `
      [입출력 예 #2]\n\n
      
      1. 가장 긴 변이 6인 경우\n
      - 될 수 있는 나머지 한 변은 4, 5, 6 로 3개입니다.\n
      2. 나머지 한 변이 가장 긴 변인 경우\n
      - 될 수 있는 한 변은 7, 8 로 2개입니다.\n\n

      따라서 3 + 2 = 5를 return합니다.
    `,
  },
  {
    input: [11, 7],
    answer: 13,
    description: `
      [입출력 예 #2]\n\n
      
      1. 가장 긴 변이 6인 경우\n
      - 될 수 있는 나머지 한 변은 5, 6, 7, 8, 9, 10, 11 로 7개입니다.\n
      2. 나머지 한 변이 가장 긴 변인 경우\n
      - 될 수 있는 한 변은 12, 13, 14, 15, 16, 17 로 6개입니다.\n\n

      따라서 7 + 6 = 13를 return합니다.
    `,
  },
];

describe("삼각형의 완성조건 (2)", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
