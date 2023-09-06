import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, [number, number][]];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      'rermgorpsam',
      [[2, 3], [0, 7], [5, 9], [6, 10]]
    ],
    answer: 'programmers',
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 my_string은 'rermgorpsam'이고 주어진 queries를 순서대로 처리하면 다음과 같습니다.\n\n

      - 'rermgorpsam'\n
      - 'remrgorpsam'\n
      - 'progrmersam'\n
      - 'prograsremm'\n
      - 'programmers'\n\n

      따라서 'programmers'를 return 합니다.
    `,
  },
];

describe("문자열 여러 번 뒤집기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
