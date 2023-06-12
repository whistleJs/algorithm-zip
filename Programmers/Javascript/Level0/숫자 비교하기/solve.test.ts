import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [2, 3],
    answer: -1,
    description: `
      [입출력 예 #1]\n\n
      
      num1이 2이고 num2가 3이므로 다릅니다. 따라서 -1을 return합니다.
    `,
  },
  {
    input: [11, 11],
    answer: 1,
    description: `
      [입출력 예 #2]\n\n
      
      num1이 11이고 num2가 11이므로 같습니다. 따라서 1을 return합니다.
    `,
  },
  {
    input: [7, 99],
    answer: -1,
    description: `
      [입출력 예 #3]\n\n
      
      num1이 7이고 num2가 99이므로 다릅니다. 따라서 -1을 return합니다.
    `,
  },
];

describe("숫자 비교하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
