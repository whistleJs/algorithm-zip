import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number];
type TestCaesAnswer = [number, number];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [3, 12],
    answer: [3, 12],
    description: `
      [입출력 예 #1]\n\n
      
      위의 설명과 같습니다.
    `
  },
  {
    input: [2, 5],
    answer: [1, 10],
    description: `
      [입출력 예 #2]\n\n
      
      자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.
    `
  }
];

describe('최대공약수와 최소공배수', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
