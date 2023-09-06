import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[][];
type TestCaesAnswer = number[][];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]],
    answer: [[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]],
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 arr은 행의 수가 4, 열의 수가 3입니다. 행의 수가 더 많으므로 열의 수를 4로 만들기 위해 arr의 각 행의 끝에 0을 추가한 이차원 배열 [[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]를 return 합니다.
    `,
  },
  {
    input: [[57, 192, 534, 2], [9, 345, 192, 999]],
    answer: [[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]],
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 arr은 행의 수가 2, 열의 수가 4입니다. 열의 수가 더 많으므로 행의 수를 4로 만들기 위해 arr의 각 열의 끝에 0을 추가한 이차원 배열 [[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]을 return 합니다.
    `,
  },
  {
    input: [[1, 2], [3, 4]],
    answer: [[1, 2], [3, 4]],
    description: `
      [입출력 예 #3]\n\n
      
      예제 3번의 arr은 행의 수와 열의 수가 2로 같습니다. 따라서 0을 추가하지 않고 [[1, 2], [3, 4]]을 return 합니다.
    `,
  },
];

describe("정사각형으로 만들기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
