import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: "1234",
    answer: 1234,
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `
  },
  {
    input: "-1234",
    answer: -1234,
    description: `
      [입출력 예 #2]\n\n
      
      설명 없습니다.
    `
  }
];

describe('문자열을 정수로 바꾸기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
