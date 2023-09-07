import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [2, 2],
    answer: 3,
    description: `
      [입출력 예 #1]\n\n
      
      본문과 동일합니다.
    `,
  },
  {
    input: [2, 5],
    answer: 9,
    description: `
      [입출력 예 #2]\n\n
      
      가로 2 세로 5인 종이는 가로로 1번 세로로 8번 총 가위질 9번이 필요합니다.
    `,
  },
  {
    input: [1, 1],
    answer: 0,
    description: `
      [입출력 예 #3]\n\n
      
      이미 1 * 1 크기이므로 0을 return 합니다.
    `,
  },
];

describe("종이 자르기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
