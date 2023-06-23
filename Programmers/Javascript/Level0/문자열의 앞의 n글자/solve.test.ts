import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, number];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['ProgrammerS123', 11],
    answer: 'ProgrammerS',
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 my_string에서 앞의 11글자는 "ProgrammerS"이므로 이 문자열을 return 합니다.
    `,
  },
  {
    input: ['He110W0r1d', 5],
    answer: 'He110',
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 my_string에서 앞의 5글자는 "He110"이므로 이 문자열을 return 합니다.
    `,
  },
];

describe("문자열의 앞의 n글자", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
