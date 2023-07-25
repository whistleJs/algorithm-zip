import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], string];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [1, 2, 3],
      'right'
    ],
    answer: [3, 1, 2],
    description: `
      [입출력 예 #1]\n\n
      
      numbers 가 [1, 2, 3]이고 direction이 'right' 이므로 오른쪽으로 한 칸씩 회전시킨 [3, 1, 2]를 return합니다.
    `,
  },
  {
    input: [
      [4, 455, 6, 4, -1, 45, 6],
      'left'
    ],
    answer: [455, 6, 4, -1, 45, 6, 4],
    description: `
      [입출력 예 #2]\n\n
      
      numbers 가 [4, 455, 6, 4, -1, 45, 6]이고 direction이 'left' 이므로 왼쪽으로 한 칸씩 회전시킨 [455, 6, 4, -1, 45, 6, 4]를 return합니다.
    `,
  },
];

describe("배열 회전시키기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
