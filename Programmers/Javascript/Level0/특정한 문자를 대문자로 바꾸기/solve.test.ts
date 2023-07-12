import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['programmers', 'p'],
    answer: 'Programmers',
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 my_string은 'programmers'이고 alp가 'p'이므로 my_string에 모든 p를 대문자인 P로 바꾼 문자열 'Programmers'를 return 합니다.
    `,
  },
  {
    input: ['lowercase', 'x'],
    answer: 'lowercase',
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 alp는 'x'이고 my_string에 x는 없습니다. 따라서 'lowercase'를 return 합니다.
    `,
  },
];

describe("특정한 문자를 대문자로 바꾸기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
