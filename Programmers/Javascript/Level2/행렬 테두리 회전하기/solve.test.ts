import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number, number[][]];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      6, 6,
      [
        [2, 2, 5, 4],
        [3, 3, 6, 6],
        [5, 1, 6, 3]
      ]
    ],
    answer: [8, 10, 25],
    description: `
      [입출력 예 #1]\n\n
      
      SOLVE.md 파일을 참고해주세요.
    `
  },
  {
    input: [
      3, 3,
      [
        [1, 1, 2, 2],
        [1, 2, 2, 3],
        [2, 1, 3, 2],
        [2, 2, 3, 3]
      ]
    ],
    answer: [1, 1, 5, 3],
    description: `
      [입출력 예 #2]\n\n
      
      SOLVE.md 파일을 참고해주세요.
    `
  },
  {
    input: [
      100, 97,
      [
        [1, 1, 100, 97]
      ]
    ],
    answer: [1],
    description: `
      [입출력 예 #3]\n\n
      
      이 예시에서는 행렬의 테두리에 위치한 모든 칸들이 움직입니다.\n
      따라서, 행렬의 테두리에 있는 수 중 가장 작은 숫자인 1이 바로 답이 됩니다.
    `
  },
];

describe('행렬 테두리 회전하기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
