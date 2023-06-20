import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number[], number];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [1, 2, 3, 100, 99, 98],
      3
    ],
    answer: [3, 6, 9, 300, 297, 294],
    description: `
      [입출력 예 #1]\n\n
      
      주어진 k인 3은 홀수이므로, 전체 배열에 3을 곱합니다. 따라서 [3, 6, 9, 300, 297, 294]을 return 합니다.
    `,
  },
  {
    input: [
      [1, 2, 3, 100, 99, 98],
      2
    ],
    answer: [3, 4, 5, 102, 101, 100],
    description: `
      [입출력 예 #2]\n\n
      
      주어진 k인 2는 짝수이므로, 전체 배열에 2를 더합니다. 따라서 [3, 4, 5, 102, 101, 100]을 return 합니다.
    `,
  },
];

describe("조건에 맞게 수열 변환하기 3", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
