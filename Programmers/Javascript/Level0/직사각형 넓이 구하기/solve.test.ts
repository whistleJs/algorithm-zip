import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number][];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [[1, 1], [2, 1], [2, 2], [1, 2]],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      좌표 [[1, 1], [2, 1], [2, 2], [1, 2]] 를 꼭짓점으로 갖는 직사각형의 가로, 세로 길이는 각각 1, 1이므로 직사각형의 넓이는 1 x 1 = 1입니다.
    `,
  },
  {
    input: [[-1, -1], [1, 1], [1, -1], [-1, 1]],
    answer: 4,
    description: `
      [입출력 예 #2]\n\n
      
      좌표 [[-1, -1], [1, 1], [1, -1], [-1, 1]]를 꼭짓점으로 갖는 직사각형의 가로, 세로 길이는 각각 2, 2이므로 직사각형의 넓이는 2 x 2 = 4입니다.
    `,
  },
];

describe("직사각형 넓이 구하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
