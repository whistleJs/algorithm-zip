import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number][];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [[80, 70], [90, 50], [40, 70], [50, 80]],
    answer: [1, 2, 4, 3],
    description: `
      [입출력 예 #1]\n\n
      
      평균은 각각 75, 70, 55, 65 이므로 등수를 매겨 [1, 2, 4, 3]을 return합니다.
    `,
  },
  {
    input: [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]],
    answer: [4, 4, 6, 2, 2, 1, 7],
    description: `
      [입출력 예 #2]\n\n
      
      평균은 각각 75, 75, 40, 95, 95, 100, 20 이므로 [4, 4, 6, 2, 2, 1, 7] 을 return합니다.\n
      공동 2등이 두 명, 공동 4등이 2명 이므로 3등과 5등은 없습니다.
    `,
  },
];

describe("등수 매기기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
