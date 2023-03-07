import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string[];
type TestCaesAnswer = [number, number, number, number];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['.#...', '..#..', '...#.'],
    answer: [0, 1, 3, 4],
    description: `
      [입출력 예 #1]\n\n
      
      문제 설명의 예시와 같은 예제입니다. (0, 1)에서 (3, 4)로 드래그 하면 모든 파일을 선택할 수 있고 드래그 한 거리는 6이었고, 6보다 적은 거리로 모든 파일을 선택하는 방법은 없습니다.\n
      따라서 [0, 1, 3, 4]를 return합니다.
    `,
  },
  {
    input: ["..........", ".....#....", "......##..", "...##.....", "....#....."],
    answer: [1, 3, 5, 8],
    description: `
      [입출력 예 #2] {SOLVE.md 파일을 참고해주세요.}\n\n
      
      (1, 3)에서 (5, 8)로 드래그하면 모든 파일을 선택할 수 있고 이보다 적은 이동거리로 모든 파일을 선택하는 방법은 없습니다.\n
      따라서 가장 적은 이동의 드래그로 모든 파일을 선택하는 방법인 [1, 3, 5, 8]을 return합니다.
    `,
  },
  {
    input: [".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."],
    answer: [0, 0, 7, 9],
    description: `
      [입출력 예 #3] {SOLVE.md 파일을 참고해주세요.}\n\n
      
      모든 파일을 선택하기 위해선 바탕화면의 가장 왼쪽 위 (0, 0)에서 가장 오른쪽 아래 (7, 9)로 드래그 해야만 합니다.\n
      따라서 [0, 0, 7, 9]를 return합니다.
    `,
  },
  {
    input: ["..", "#."],
    answer: [1, 0, 2, 1],
    description: `
      [입출력 예 #4] {SOLVE.md 파일을 참고해주세요.}\n\n
      
      이를 드래그로 선택하기 위해서는 그 칸의 왼쪽 위 (1, 0)에서 오른쪽 아래 (2, 1)로 드래그 하면 됩니다. (1, 0)에서 (2, 2)로 드래그 해도 아이콘을 선택할 수 있지만 이전보다 이동거리가 늘어납니다.\n
      따라서 [1, 0, 2, 1]을 return합니다.
    `,
  },
];

describe('바탕화면 정리', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
