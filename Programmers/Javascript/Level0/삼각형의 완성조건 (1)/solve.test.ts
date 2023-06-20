import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number, number];
type TestCaesAnswer = 1 | 2;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 3],
    answer: 2,
    description: `
      [입출력 예 #1]\n\n
      
      가장 큰 변인 3이 나머지 두 변의 합 3과 같으므로 삼각형을 완성할 수 없습니다. 따라서 2를 return합니다.
    `,
  },
  {
    input: [3, 6, 2],
    answer: 2,
    description: `
      [입출력 예 #2]\n\n
      
      가장 큰 변인 6이 나머지 두 변의 합 5보다 크므로 삼각형을 완성할 수 없습니다. 따라서 2를 return합니다.
    `,
  },
  {
    input: [199, 72, 222],
    answer: 1,
    description: `
      [입출력 예 #3]\n\n
      
      가장 큰 변인 222가 나머지 두 변의 합 271보다 작으므로 삼각형을 완성할 수 있습니다. 따라서 1을 return합니다.
    `,
  },
];

describe("삼각형의 완성조건 (1)", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
