import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'jaron',
    answer: 'noraj',
    description: `
      [입출력 예 #1]\n\n
      
      my_string이 'jaron'이므로 거꾸로 뒤집은 'noraj'를 return합니다.
    `,
  },
  {
    input: 'bread',
    answer: 'daerb',
    description: `
      [입출력 예 #2]\n\n
      
      my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.
    `,
  },
];

describe("문자열 뒤집기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
