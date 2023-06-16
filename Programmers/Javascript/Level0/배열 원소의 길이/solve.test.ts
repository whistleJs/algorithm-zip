import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ["We", "are", "the", "world!"],
    answer: [2, 3, 3, 6],
    description: `
      [입출력 예 #1]\n\n
      
      ["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.
    `,
  },
  {
    input: ["I", "Love", "Programmers."],
    answer: [1, 4, 12],
    description: `
      [입출력 예 #2]\n\n
      
      ["I", "Love", "Programmers."]의 각 원소의 길이인 [1, 4, 12]을 return합니다.
    `,
  },
];

describe("배열 원소의 길이", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
