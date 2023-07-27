import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [2, 6, 1],
    answer: 9,
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번에서 세 주사위 숫자가 모두 다르므로 2 + 6 + 1 = 9점을 얻습니다. 따라서 9를 return 합니다.
    `,
  },
  {
    input: [5, 3, 3],
    answer: 473,
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번에서 두 주사위 숫자만 같으므로 (5 + 3 + 3) x (5^2 + 3^2 + 3^2) = 11 x 43 = 473점을 얻습니다. 따라서 473을 return 합니다.
    `,
  },
  {
    input: [4, 4, 4],
    answer: 110592,
    description: `
      [입출력 예 #3]\n\n
      
      예제 3번에서 세 주사위 숫자가 모두 같으므로 (4 + 4 + 4) x (4^2 + 4^2 + 4^2) x (4^3 + 4^3 + 4^3) = 12 x 48 x 192 = 110,592점을 얻습니다. 따라서 110592를 return 합니다.
    `,
  },
];

describe("주사위 게임 2", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
