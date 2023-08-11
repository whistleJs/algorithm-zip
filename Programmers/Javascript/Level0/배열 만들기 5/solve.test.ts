import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string[], number, number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      ['0123456789', '9876543210', '9999999999999'],
      50000, 5, 5
    ],
    answer: [56789, 99999],
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `,
  },
];

describe("배열 만들기 5", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
