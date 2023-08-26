import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 3, 100, 99, 98],
    answer: 5,
    description: `
      [입출력 예 #1]\n\n
      
      위 작업을 반복하면 다음과 같이 arr가 변합니다.\n\n

      - [1, 2, 3, 100, 99, 98]\n
      - [3, 2, 7, 50, 99, 49]\n
      - [7, 2, 15, 25, 99, 99]\n
      - [15, 2, 31, 51, 99, 99]\n
      - [31, 2, 63, 51, 99, 99]\n
      - [63, 2, 63, 51, 99, 99]\n
      - [63, 2, 63, 51, 99, 99]\n\n

      이후로 arr가 변하지 않으며, arr(5) = arr(6)이므로 5를 return 합니다.
    `,
  },
];

describe("조건에 맞게 수열 변환하기 2", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
