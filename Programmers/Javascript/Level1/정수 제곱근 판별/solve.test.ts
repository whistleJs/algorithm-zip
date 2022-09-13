import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 121,
    answer: 144,
    description: `
      [입출력 예 #1]\n\n
      
      121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.
    `
  },
  {
    input: 3,
    answer: -1,
    description: `
      [입출력 예 #2]\n\n
      
      3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.
    `
  }
];

describe('정수 제곱근 판별', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
