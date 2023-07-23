import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 23,
    answer: 'cd',
    description: `
      [입출력 예 #1]\n\n
      
      age가 23이므로 'cd'를 return합니다.
    `,
  },
  {
    input: 51,
    answer: 'fb',
    description: `
      [입출력 예 #2]\n\n
      
      age가 51이므로 'fb'를 return합니다.
    `,
  },
  {
    input: 100,
    answer: 'baa',
    description: `
      [입출력 예 #3]\n\n
      
      age가 100이므로 'baa'를 return합니다.
    `,
  },
];

describe("외계행성의 나이", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
