import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: '.... . .-.. .-.. ---',
    answer: 'hello',
    description: `
      [입출력 예 #1]\n\n
      
      .... = h\n
      . = e\n
      .-.. = l\n
      .-.. = l\n
      --- = o\n
      따라서 'hello'를 return 합니다.
    `,
  },
  {
    input: '.--. -.-- - .... --- -.',
    answer: 'python',
    description: `
      [입출력 예 #2]\n\n
      
      .--. = p\n
      -.-- = y\n
      - = t\n
      .... = h\n
      --- = o\n
      -. = n\n
      따라서 'python'을 return 합니다.
    `,
  },
];

describe("모스부호 (1)", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
