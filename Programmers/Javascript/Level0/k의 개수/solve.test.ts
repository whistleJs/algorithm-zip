import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 13, 1],
    answer: 6,
    description: `
      [입출력 예 #1]\n\n
      
      본문과 동일합니다.
    `,
  },
  {
    input: [10, 50, 5],
    answer: 5,
    description: `
      [입출력 예 #2]\n\n
      
      10부터 50까지 5는 15, 25, 35, 45, 50 총 5번 등장합니다. 따라서 5를 return 합니다.
    `,
  },
  {
    input: [3, 10, 2],
    answer: 0,
    description: `
      [입출력 예 #3]\n\n
      
      3부터 10까지 2는 한 번도 등장하지 않으므로 0을 return 합니다.
    `,
  },
];

describe("k의 개수", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
