import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 118372,
    answer: 873211,
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `
  }
];

describe('정수 내림차순으로 배치하기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
