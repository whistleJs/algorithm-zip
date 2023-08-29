import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [[1, 2, 3, 4], 2],
    answer: 3,
    description: `
      [입출력 예 #1]\n\n
      
      - 1번은 첫 번째로 3번에게 공을 던집니다.\n
      - 3번은 두 번째로 1번에게 공을 던집니다.
    `,
  },
  {
    input: [[1, 2, 3, 4, 5, 6], 5],
    answer: 3,
    description: `
      [입출력 예 #2]\n\n
      
      1번은 첫 번째로 3번에게 공을 던집니다.\n
      3번은 두 번째로 5번에게 공을 던집니다.\n
      5번은 세 번째로 1번에게 공을 던집니다.\n
      1번은 네 번째로 3번에게 공을 던집니다.\n
      3번은 다섯 번째로 5번에게 공을 던집니다.
    `,
  },
  {
    input: [[1, 2, 3], 3],
    answer: 2,
    description: `
      [입출력 예 #3]\n\n
      
      1번은 첫 번째로 3번에게 공을 던집니다.\n
      2번은 세 번째로 1번에게 공을 던집니다.\n
      3번은 두 번째로 2번에게 공을 던집니다.
    `,
  },
];

describe("공 던지기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
