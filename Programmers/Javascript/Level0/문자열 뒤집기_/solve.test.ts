import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, number, number];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['Progra21Sremm3', 6, 12],
    answer: 'ProgrammerS123',
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 my_string에서 인덱스 6부터 인덱스 12까지를 뒤집은 문자열은 'ProgrammerS123'이므로 'ProgrammerS123'를 return 합니다.
    `,
  },
  {
    input: ['Stanley1yelnatS', 4, 10],
    answer: 'Stanley1yelnatS',
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 my_string에서 인덱스 4부터 인덱스 10까지를 뒤집으면 원래 문자열과 같은 'Stanley1yelnatS'이므로 'Stanley1yelnatS'를 return 합니다.
    `,
  },
];

describe("문자열 뒤집기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
