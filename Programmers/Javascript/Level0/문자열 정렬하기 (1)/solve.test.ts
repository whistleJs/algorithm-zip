import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'hi12392',
    answer: [1, 2, 2, 3, 9],
    description: `
      [입출력 예 #1]\n\n
      
      'hi12392'에 있는 숫자 1, 2, 3, 9, 2를 오름차순 정렬한 [1, 2, 2, 3, 9]를 return 합니다.
    `,
  },
  {
    input: 'p2o4i8gj2',
    answer: [2, 2, 4, 8],
    description: `
      [입출력 예 #2]\n\n
      
      'p2o4i8gj2'에 있는 숫자 2, 4, 8, 2를 오름차순 정렬한 [2, 2, 4, 8]을 return 합니다.
    `,
  },
  {
    input: 'abcde0',
    answer: [0],
    description: `
      [입출력 예 #3]\n\n
      
      'abcde0'에 있는 숫자 0을 오름차순 정렬한 [0]을 return 합니다.
    `,
  },
];

describe("문자열 정렬하기 (1)", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
