import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, number];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['dfjardstddetckdaccccdegk', 4],
    answer: 'attack',
    description: `
      [입출력 예 #1]\n\n
      
      'dfjardstddetckdaccccdegk' 의 4번째, 8번째, 12번째, 16번째, 20번째, 24번째 글자를 합친 'attack'을 return합니다.
    `,
  },
  {
    input: ['pfqallllabwaoclk', 2],
    answer: 'fallback',
    description: `
      [입출력 예 #2]\n\n
      
      'pfqallllabwaoclk' 의 2번째, 4번째, 6번째, 8번째, 10번째, 12번째, 14번째, 16번째 글자를 합친 'fallback'을 return합니다.
    `,
  },
];

describe("암호 해독", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
