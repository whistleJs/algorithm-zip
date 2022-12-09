import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'banana',
    answer: [-1, -1, -1, 2, 2, 2],
    description: `
      [입출력 예 #1]\n\n
      
      지문과 같습니다.
    `
  },
  {
    input: 'foobar',
    answer: [-1, -1, 1, -1, -1, -1],
    description: `
      [입출력 예 #2]\n\n
      
      설명 생략
    `
  }
];

describe('가장 가까운 같은 글자', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
