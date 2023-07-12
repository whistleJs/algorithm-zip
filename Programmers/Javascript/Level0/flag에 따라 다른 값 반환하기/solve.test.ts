import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number, boolean];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [-4, 7, true],
    answer: 3,
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번에서 flag가 true이므로 a + b = (-4) + 7 = 3을 return 합니다.
    `,
  },
  {
    input: [-4, 7, false],
    answer: -11,
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번에서 flag가 false이므로 a - b = (-4) - 7 = -11을 return 합니다.
    `,
  },
];

describe("flag에 따라 다른 값 반환하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
