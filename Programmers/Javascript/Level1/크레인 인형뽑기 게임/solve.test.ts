import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[][], number[]];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1]
      ],
      [1, 5, 3, 5, 1, 2, 1, 4]
    ],
    answer: 4,
    description: `
    [입출력 예 #1]\n\n

    인형의 처음 상태는 문제에 주어진 예시와 같습니다.\n
    크레인이 [1, 5, 3, 5, 1, 2, 1, 4] 번 위치에서 차례대로 인형을 집어서 바구니에 옮겨 담은 후,\n
    상태는 아래 그림과 같으며 바구니에 담는 과정에서 터트려져 사라진 인형은 4개 입니다.
    `
  }
];

describe('크레인 인형뽑기 게임', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
