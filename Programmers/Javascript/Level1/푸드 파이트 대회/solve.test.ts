import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 3, 4, 6],
    answer: '1223330333221',
    description: `
      [입출력 예 #1]\n\n
      
      문제 예시와 같습니다.
    `
  },
  {
    input: [1, 7, 1, 2],
    answer: '111303111',
    description: `
      [입출력 예 #2]\n\n
      
      두 선수는 1번 음식 3개, 3번 음식 1개를 먹게 되므로 음식의 배치는 "111303111"입니다.
    `
  }
];

describe('푸드 파이트 대회', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
