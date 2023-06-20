import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, number];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['hello', 3],
    answer: 'hhheeellllllooo',
    description: `
      [입출력 예 #1]\n\n
      
      'hello'의 각 문자를 세 번씩 반복한 'hhheeellllllooo'를 return 합니다.
    `,
  },
];

describe("문자 반복 출력하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
