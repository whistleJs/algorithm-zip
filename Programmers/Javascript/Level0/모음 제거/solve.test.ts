import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'bus',
    answer: 'bs',
    description: `
      [입출력 예 #1]\n\n
      
      'bus'에서 모음 u를 제거한 'bs'를 return합니다.
    `,
  },
  {
    input: 'nice to meet you',
    answer: 'nc t mt y',
    description: `
      [입출력 예 #2]\n\n
      
      'nice to meet you'에서 모음 i, o, e, u를 모두 제거한 'nc t mt y'를 return합니다.
    `,
  },
];

describe("모음 제거", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
