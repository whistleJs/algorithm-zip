import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    answer: 5.5,
    description: `
      [입출력 예 #1]\n\n
      
      numbers의 원소들의 평균 값은 5.5입니다.
    `,
  },
  {
    input: [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
    answer: 94,
    description: `
      [입출력 예 #2]\n\n
      
      numbers의 원소들의 평균 값은 94.0입니다.
    `,
  },
];

describe("배열의 평균값", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
