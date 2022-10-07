import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string[], number];
type TestCaesAnswer = string[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      ['sun', 'bed', 'car'],
      1
    ],
    answer: ['car', 'bed', 'sun'],
    description: `
      [입출력 예 #1]\n\n

      'sun', 'bed', 'car'의 1번째 인덱스 값은 각각 'u', 'e', 'a' 입니다. 이를 기준으로 strings를 정렬하면 ['car', 'bed', 'sun'] 입니다.
    `
  },
  {
    input: [
      ['abce', 'abcd', 'cdx'],
      2
    ],
    answer: ['abcd', 'abce', 'cdx'],
    description: `
      [입출력 예 #2]\n\n
      
      'abce'와 'abcd', 'cdx'의 2번째 인덱스 값은 'c', 'c', 'x'입니다. 따라서 정렬 후에는 'cdx'가 가장 뒤에 위치합니다. 'abce'와 'abcd'는 사전순으로 정렬하면 'abcd'가 우선하므로, 답은 ['abcd', 'abce', 'cdx'] 입니다.
    `
  }
];

describe('문자열 내 마음대로 정렬하기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
