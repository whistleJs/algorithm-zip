import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = boolean;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: "pPoooyY",
    answer: true,
    description: `
      [입출력 예 #1]\n\n
      
      'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.
    `
  },
  {
    input: "Pyy",
    answer: false,
    description: `
      [입출력 예 #2]\n\n
      
      'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.
    `
  }
];

describe('문자열 내 p와 y의 개수', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
