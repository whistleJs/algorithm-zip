import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'people',
    answer: 'peol',
    description: `
      [입출력 예 #1]\n\n
      
      'people'에서 중복된 문자 'p'와 'e'을 제거한 'peol'을 return합니다.
    `,
  },
  {
    input: 'We are the world',
    answer: 'We arthwold',
    description: `
      [입출력 예 #2]\n\n
      
      'We are the world'에서 중복된 문자 'e', ' ', 'r' 들을 제거한 'We arthwold'을 return합니다.
    `,
  },
];

describe("중복된 문자", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
