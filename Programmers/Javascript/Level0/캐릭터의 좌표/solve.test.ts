import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string[], [number, number]];
type TestCaesAnswer = [number, number];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      ['left', 'right', 'up', 'right', 'right'],
      [11, 11]	
    ],
    answer: [2, 1],
    description: `
      [입출력 예 #1]\n\n
      
      [0, 0]에서 왼쪽으로 한 칸 오른쪽으로 한 칸 위로 한 칸 오른쪽으로 두 칸 이동한 좌표는 [2, 1]입니다.
    `,
  },
  {
    input: [
      ['down', 'down', 'down', 'down', 'down'],
      [7, 9]
    ],
    answer: [0, -4],
    description: `
      [입출력 예 #2]\n\n
      
      [0, 0]에서 아래로 다섯 칸 이동한 좌표는 [0, -5]이지만 맵의 세로 크기가 9이므로 아래로는 네 칸을 넘어서 이동할 수 없습니다. 따라서 [0, -4]를 return합니다.
    `,
  },
];

describe("캐릭터의 좌표", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
