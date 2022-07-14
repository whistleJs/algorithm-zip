import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], 'left' | 'right'];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],
      'right'
    ],
    answer: 'LRLLLRLLRRL',
    description: `
      [입출력 예 #1]\n
      순서대로 눌러야 할 번호가 [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]이고, 오른손잡이입니다.\n\n

      | 왼손 위치 | 오른손 위치 | 눌러야 할 숫자 | 사용한 손 |                        설명                        |\n
      |    *    |     #    |      1      |    L   | 1은 왼손으로 누릅니다.                                 |\n
      |    1    |     #    |      3      |    R   | 3은 오른손으로 누릅니다.                                |\n
      |    1    |     3    |      4      |    L   | 4는 왼손으로 누릅니다.                                 |\n
      |    4    |     3    |      5      |    L   | 왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.    |\n
      |    5    |     3    |      8      |    L   | 왼손 거리는 1, 오른손 거리는 3이므로 왼손으로 8을 누릅니다.    |\n
      |    8    |     3    |      2      |    R   | 왼손 거리는 2, 오른손 거리는 1이므로 오른손으로 2를 누릅니다.   |\n
      |    8    |     2    |      1      |    L   | 1은 왼손으로 누릅니다.                                 |\n
      |    1    |     2    |      4      |    L   | 4는 왼손으로 누릅니다.                                 |\n
      |    4    |     2    |      5      |    R   | 왼손 거리와 오른손 거리가 1로 같으므로, 오른손으로 5를 누릅니다. |\n
      |    4    |     5    |      9      |    R   | 9는 오른손으로 누릅니다.                                |\n
      |    4    |     9    |      5      |    L   | 왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.    |
    `
  },
  {
    input: [
      [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],
      'left'
    ],
    answer: 'LRLLRRLLLRR',
    description: `
      [입출력 예 #2]\n
      왼손잡이가 [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]를 순서대로 누르면 사용한 손은 "LRLLRRLLLRR"이 됩니다.
    `
  },
  {
    input: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      'right'
    ],
    answer: 'LLRLLRLLRL',
    description: `
      [입출력 예 #3]\n
      오른손잡이가 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]를 순서대로 누르면 사용한 손은 "LLRLLRLLRL"이 됩니다.
    `
  }
];

describe('키패드 누르기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
