import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [[number, number, number], [number, number, number]];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [2021, 12, 28],
      [2021, 12, 29]
    ],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      date1이 date2보다 하루 앞서기 때문에 1을 return 합니다.
    `,
  },
  {
    input: [
      [1024, 10, 24],
      [1024, 10, 24]
    ],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      date1과 date2는 날짜가 서로 같으므로 date1이 더 앞서는 날짜가 아닙니다. 따라서 0을 return 합니다.
    `,
  },
];

describe("날짜 비교하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
