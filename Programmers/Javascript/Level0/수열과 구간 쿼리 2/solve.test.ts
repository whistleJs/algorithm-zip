import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], [number, number, number][]];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [0, 1, 2, 4, 3],
      [[0, 4, 2],[0, 3, 2],[0, 2, 2]]
    ],
    answer: [3, 4, -1],
    description: `
      [입출력 예 #1]\n\n
      
      첫 번째 쿼리의 범위에는 0, 1, 2, 4, 3이 있으며 이 중 2보다 크면서 가장 작은 값은 3입니다.\n
      두 번째 쿼리의 범위에는 0, 1, 2, 4가 있으며 이 중 2보다 크면서 가장 작은 값은 4입니다.\n
      세 번째 쿼리의 범위에는 0, 1, 2가 있으며 여기에는 2보다 큰 값이 없습니다.\n\n

      따라서 [3, 4, -1]을 return 합니다.
    `,
  },
];

describe("수열과 구간 쿼리 2", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
