import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, number, number];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['ihrhbakrfpndopljhygc', 4, 2],
    answer: 'happy',
    description: `
      [입출력 예 #1]\n\n
      
      2열에 적힌 글자를 세로로 읽으면 happy이므로 'happy'를 return 합니다.
    `,
  },
  {
    input: ['programmers', 1, 1],
    answer: 'programmers',
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 my_string은 m이 1이므로 세로로 'programmers'를 적는 것과 같고 따라서 1열에 적힌 글자를 세로로 읽으면 programmers입니다. 따라서 'programmers'를 return 합니다.
    `,
  },
];

describe("세로 읽기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
