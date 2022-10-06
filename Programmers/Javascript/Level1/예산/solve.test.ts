import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [1, 3, 2, 5, 4],
      9
    ],
    answer: 3,
    description: `
      [입출력 예 #1]\n\n
      
      - 1원, 2원, 3원을 신청한 부서의 물품을 구매해주려면 6원이 필요합니다.\n
      - 1원, 2원, 5원을 신청한 부서의 물품을 구매해주려면 8원이 필요합니다.\n
      - 1원, 3원, 4원을 신청한 부서의 물품을 구매해주려면 8원이 필요합니다.\n
      - 1원, 3원, 5원을 신청한 부서의 물품을 구매해주려면 9원이 필요합니다.\n\n

      3개 부서보다 더 많은 부서의 물품을 구매해 줄 수는 없으므로 최대 3개 부서의 물품을 구매해 줄 수 있습니다.
    `
  },
  {
    input: [
      [2, 2, 3, 3],
      10
    ],
    answer: 4,
    description: `
      [입출력 예 #2]\n\n
      
      모든 부서의 물품을 구매해주면 10원이 됩니다. 따라서 최대 4개 부서의 물품을 구매해 줄 수 있습니다.
    `
  },
];

describe('예산', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
