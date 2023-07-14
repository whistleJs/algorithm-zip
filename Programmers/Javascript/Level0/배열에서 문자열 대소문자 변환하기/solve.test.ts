import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string[];
type TestCaesAnswer = string[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['AAA', 'BBB', 'CCC', 'DDD'],
    answer: ['aaa', 'BBB', 'ccc', 'DDD'],
    description: `
      [입출력 예 #1]\n\n
      
      strArr[0]과 strArr[2]는 짝수번째 인덱스의 문자열이므로 모두 소문자로 바꿔서 'aaa'와 'ccc'가 됩니다.\n
      strArr[1]과 strArr[3]는 홀수번째 인덱스의 문자열인데 원래 대문자이므로 그대로 둡니다.\n
      따라서 ['aaa', 'BBB', 'ccc', 'DDD']를 return 합니다.
    `,
  },
  {
    input: ['aBc','AbC'],
    answer: ['abc','ABC'],
    description: `
      [입출력 예 #2]\n\n
      
      strArr[0]은 짝수번째 인덱스의 문자열이므로 소문자로 바꿔서 'abc'가 됩니다.\n
      strArr[1]은 홀수번째 인덱스의 문자열이므로 대문자로 바꿔서 'ABC'가 됩니다.\n
      따라서 ['abc', 'ABC']를 return 합니다.
    `,
  },
];

describe("배열에서 문자열 대소문자 변환하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
