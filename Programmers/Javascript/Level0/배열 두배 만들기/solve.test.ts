import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 3, 4, 5],
    answer: [2, 4, 6, 8, 10],
    description: `
      [입출력 예 #1]\n\n
      
      [1, 2, 3, 4, 5]의 각 원소에 두배를 한 배열 [2, 4, 6, 8, 10]을 return합니다.
    `,
  },
  {
    input: [1, 2, 100, -99, 1, 2, 3],
    answer: [2, 4, 200, -198, 2, 4, 6],
    description: `
      [입출력 예 #2]\n\n
      
      [1, 2, 100, -99, 1, 2, 3]의 각 원소에 두배를 한 배열 [2, 4, 200, -198, 2, 4, 6]을 return합니다.
    `,
  },
];

describe("배열 두배 만들기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
