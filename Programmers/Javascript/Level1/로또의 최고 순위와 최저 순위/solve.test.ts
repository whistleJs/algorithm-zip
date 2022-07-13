import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number[]];
type TestCaesAnswer = number[]

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [44, 1, 0, 0, 31, 25],
      [31, 10, 45, 1, 6, 19]
    ],
    answer: [3, 5],
    description: '문제 예시와 같습니다.'
  },
  {
    input: [
      [0, 0, 0, 0, 0, 0],
      [38, 19, 20, 40, 15, 25]
    ],
    answer: [1, 6],
    description: `
      알아볼 수 없는 번호들이 아래와 같았다면, 1등과 6등에 당첨될 수 있습니다.\n
      |   당첨 번호   |	 38  |  19  |  20  |  40  |  15  |  25  |       결과       |\n
      | 최고 순위 번호 | 0→38 | 0→19 | 0→20 | 0→40 | 0→15 | 0→25 | 6개 번호 일치, 1등 |\n
      | 최저 순위 번호 | 0→21 | 0→22 | 0→23 | 0→24 | 0→26 | 0→27 | 0개 번호 일치, 6등 |\n
    `
  },
  {
    input: [
      [45, 4, 35, 20, 3, 9],
      [20, 9, 3, 45, 4, 35]
    ],
    answer: [1, 1],
    description: '민우가 구매한 로또의 번호와 당첨 번호가 모두 일치하므로, 최고 순위와 최저 순위는 모두 1등입니다.'
  }
];

describe('신고 결과 받기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
