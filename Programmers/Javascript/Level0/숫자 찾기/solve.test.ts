import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [29183, 1],
    answer: 3,
    description: `
      [입출력 예 #1]\n\n
      
      29183에서 1은 3번째에 있습니다.
    `,
  },
  {
    input: [232443, 4],
    answer: 4,
    description: `
      [입출력 예 #2]\n\n
      
      232443에서 4는 4번째에 처음 등장합니다.
    `,
  },
  {
    input: [123456, 7],
    answer: -1,
    description: `
      [입출력 예 #3]\n\n
      
      123456에 7은 없으므로 -1을 return 합니다.
    `,
  },
];

describe("숫자 찾기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
