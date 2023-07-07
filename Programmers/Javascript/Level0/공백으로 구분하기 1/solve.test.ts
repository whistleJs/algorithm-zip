import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'i love you',
    answer: ['i', 'love', 'you'],
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 my_string은 'i love you'로 공백 한 칸으로 나누어진 단어들은 앞에서부터 순서대로 'i', 'love', 'you' 이므로 ['i', 'love', 'you']를 return 합니다.
    `,
  },
  {
    input: 'programmers',
    answer: ['programmers'],
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 my_string은 'programmers'로 단어가 하나만 있습니다. 따라서 ['programmers']를 return 합니다.
    `,
  },
];

describe("공백으로 구분하기 1", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
