import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [10, 3],
    answer: 124000,
    description: `
      [입출력 예 #1]\n\n
      
      10인분을 시켜 서비스로 음료수를 하나 받아 총 10 * 12000 + 3 * 2000 - 1 * 2000 = 124,000원입니다.
    `,
  },
  {
    input: [64, 6],
    answer: 768000,
    description: `
      [입출력 예 #2]\n\n
      
      64인분을 시켜 서비스로 음료수를 6개 받아 총 64 * 12000 + 6 * 2000 - 6 * 2000 = 768,000원입니다.
    `,
  },
];

describe("양꼬치", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
