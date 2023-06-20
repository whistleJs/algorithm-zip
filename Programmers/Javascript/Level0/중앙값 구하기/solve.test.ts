import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 7, 10, 11],
    answer: 7,
    description: `
      [입출력 예 #1]\n\n
      
      본문과 동일합니다.
    `,
  },
  {
    input: [9, -1, 0],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      9, -1, 0을 오름차순 정렬하면 -1, 0, 9이고 가장 중앙에 위치하는 값은 0입니다.
    `,
  },
];

describe("중앙값 구하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
