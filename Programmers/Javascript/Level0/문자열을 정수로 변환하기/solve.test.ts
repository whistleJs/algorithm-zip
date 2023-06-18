import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: '10',
    answer: 10,
    description: `
      [입출력 예 #1]\n\n
      
      '10'을 정수로 바꾸면 10입니다.
    `,
  },
  {
    input: '8542',
    answer: 8542,
    description: `
      [입출력 예 #2]\n\n
      
      '8542'를 정수로 바꾸면 8542입니다.
    `,
  },
];

describe("문자열을 정수로 변환하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
