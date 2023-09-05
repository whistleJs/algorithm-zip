import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string[];
type TestCaesAnswer = string[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['u', 'u', 'l', 'r'],
    answer: ['u', 'u'],
    description: `
      [입출력 예 #1]\n\n
      
      'r'보다 'l'이 먼저 나왔기 때문에 'l'의 왼쪽에 있는 문자열들을 담은 리스트인 ['u', 'u']를 return합니다.
    `,
  },
  {
    input: ['l'],
    answer: [],
    description: `
      [입출력 예 #2]\n\n
      
      'l'의 왼쪽에 문자열이 없기 때문에 빈 리스트를 return합니다.
    `,
  },
];

describe("왼쪽 오른쪽", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
