import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [3, 5],
    answer: 34,
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번에서 두 주사위 숫자가 모두 홀수이므로 32 + 52 = 9 + 25 = 34점을 얻습니다. 따라서 34를 return 합니다.
    `,
  },
  {
    input: [6, 1],
    answer: 14,
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번에서 두 주사위 숫자 중 하나만 홀수이므로 2 × (6 + 1) = 2 × 7 = 14점을 얻습니다. 따라서 14를 return 합니다.
    `,
  },
  {
    input: [2, 4],
    answer: 2,
    description: `
      [입출력 예 #3]\n\n
      
      예제 3번에서 두 주사위 숫자가 모두 홀수가 아니므로 |2 - 4| = |-2| = 2점을 얻습니다. 따라서 2를 return 합니다.
    `,
  },
];

describe("주사위 게임 1", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
