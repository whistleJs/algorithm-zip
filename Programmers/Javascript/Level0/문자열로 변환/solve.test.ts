import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 123,
    answer: '123',
    description: `
      [입출력 예 #1]\n\n
      
      123을 문자열로 변환한 "123"을 return합니다.
    `,
  },
  {
    input: 2573,
    answer: '2573',
    description: `
      [입출력 예 #2]\n\n
      
      2573을 문자열로 변환한 "2573"을 return합니다.
    `,
  },
];

describe("문자열로 변환", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
