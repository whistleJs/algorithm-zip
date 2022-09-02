import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 3, 4, 5],
    answer: [1],
    description: `
      [입출력 예 #1]\n\n
      
      - 수포자 1은 모든 문제를 맞혔습니다.\n
      - 수포자 2는 모든 문제를 틀렸습니다.\n
      - 수포자 3은 모든 문제를 틀렸습니다.\n

      따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.
    `
  },
  {
    input: [1, 3, 2, 4, 2],
    answer: [1, 2, 3],
    description: `
      [입출력 예 #2]\n\n
      
      모든 사람이 2문제씩을 맞췄습니다.
    `
  }
];

describe('모의고사', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
