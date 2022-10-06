import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'try hello world',
    answer: 'TrY HeLlO WoRlD',
    description: `
      [입출력 예 #1]\n\n
      
      'try hello world'는 세 단어 'try', 'hello', 'world'로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 'TrY', 'HeLlO', 'WoRlD'입니다. 따라서 'TrY HeLlO WoRlD' 를 리턴합니다.
    `
  },
];

describe('이상한 문자 만들기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
