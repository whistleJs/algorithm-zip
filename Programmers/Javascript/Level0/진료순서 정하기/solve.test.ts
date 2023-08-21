import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [3, 76, 24],
    answer: [3, 1, 2],
    description: `
      [입출력 예 #1]\n\n
      
      emergency가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.
    `,
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7],
    answer: [7, 6, 5, 4, 3, 2, 1],
    description: `
      [입출력 예 #2]\n\n
      
      emergency가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.
    `,
  },
  {
    input: [30, 10, 23, 6, 100],
    answer: [2, 4, 3, 5, 1],
    description: `
      [입출력 예 #3]\n\n
      
      emergency가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.
    `,
  },
];

describe("진료순서 정하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
