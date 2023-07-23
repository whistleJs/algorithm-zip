import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [4, 5],
    answer: '4 + 5 = 9',
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `,
  },
];

describe("덧셈식 출력하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
