import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'banana',
    answer: ['a', 'ana', 'anana', 'banana', 'na', 'nana'],
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 my_string는 'banana'로 모든 접미사는 문제의 설명과 같습니다.\n
      이를 사전순으로 정렬하면 'a', 'ana', 'anana', 'banana', 'na', 'nana'이므로 ['a', 'ana', 'anana', 'banana', 'na', 'nana']를 return 합니다.
    `,
  },
  {
    input: 'programmers',
    answer: ['ammers', 'ers', 'grammers', 'mers', 'mmers', 'ogrammers', 'programmers', 'rammers', 'rogrammers', 'rs', 's'],
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 my_string는 'programmers'이고 모든 접미사는 'programmers', 'rogrammers', 'ogrammers', 'grammers', 'rammers', 'ammers', 'mmers', 'mers', 'ers', 'rs', 's'입니다.\n
      이를 사전순으로 정렬한 문자열 배열 ['ammers', 'ers', 'grammers', 'mers', 'mmers', 'ogrammers', 'programmers', 'rammers', 'rogrammers', 'rs', 's']를 return 합니다.
    `,
  },
];

describe("접미사 배열", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
