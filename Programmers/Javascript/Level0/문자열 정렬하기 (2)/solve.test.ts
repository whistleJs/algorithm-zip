import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'Bcad',
    answer: 'abcd',
    description: `
      [입출력 예 #1]\n\n
      
      'Bcad'를 모두 소문자로 바꾸면 'bcad'이고 이를 알파벳 순으로 정렬하면 'abcd'입니다.
    `,
  },
  {
    input: 'heLLo',
    answer: 'ehllo',
    description: `
      [입출력 예 #2]\n\n
      
      'heLLo'를 모두 소문자로 바꾸면 'hello'이고 이를 알파벳 순으로 정렬하면 'ehllo'입니다.
    `,
  },
  {
    input: 'Python',
    answer: 'hnopty',
    description: `
      [입출력 예 #3]\n\n
      
      'Python'를 모두 소문자로 바꾸면 'python'이고 이를 알파벳 순으로 정렬하면 'hnopty'입니다.
    `,
  },
];

describe("문자열 정렬하기 (2)", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
