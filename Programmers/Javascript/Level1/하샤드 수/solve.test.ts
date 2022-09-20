import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = boolean;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 10,
    answer: true,
    description: `
      [입출력 예 #1]\n\n
      
      10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.
    `
  },
  {
    input: 12,
    answer: true,
    description: `
      [입출력 예 #2]\n\n
      
      12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.
    `
  },
  {
    input: 11,
    answer: false,
    description: `
      [입출력 예 #3]\n\n
      
      11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.
    `
  },
  {
    input: 13,
    answer: false,
    description: `
      [입출력 예 #4]\n\n
      
      13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.
    `
  }
];

describe('하샤드 수', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
