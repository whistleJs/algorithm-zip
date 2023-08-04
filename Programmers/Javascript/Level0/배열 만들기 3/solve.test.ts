import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], [[number, number], [number, number]]];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [1, 2, 3, 4, 5],
      [[1, 3], [0, 4]]
    ],
    answer: [2, 3, 4, 1, 2, 3, 4, 5],
    description: `
      [입출력 예 #1]\n\n
      
      첫 번째 구간에 해당하는 배열은 [2, 3, 4] 입니다.\n
      두 번째 구간에 해당하는 배열은 [1, 2, 3, 4, 5] 입니다.\n
      따라서 이 두 배열을 앞뒤로 붙인 배열인 [2, 3, 4, 1, 2, 3, 4, 5]를 return 합니다.
    `,
  },
];

describe("배열 만들기 3", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
