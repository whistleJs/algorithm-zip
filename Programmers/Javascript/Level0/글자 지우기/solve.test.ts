import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, number[]];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      'apporoograpemmemprs',
      [1, 16, 6, 15, 0, 10, 11, 3]
    ],
    answer: 'programmers',
    description: `
      [입출력 예 #1]\n\n
      
      indices에 있는 인덱스의 글자들을 지우고 이어붙이면 'programmers'가 되므로 이를 return 합니다.
    `,
  },
];

describe("글자 지우기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
