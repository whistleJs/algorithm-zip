import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['banana', 'ban'],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번에서 is_prefix가 my_string의 접두사이기 때문에 1을 return 합니다.
    `,
  },
  {
    input: ['banana', 'nan'],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번에서 is_prefix가 my_string의 접두사가 아니기 때문에 0을 return 합니다.
    `,
  },
  {
    input: ['banana', 'abcd'],
    answer: 0,
    description: `
      [입출력 예 #3]\n\n
      
      예제 3번에서 is_prefix가 my_string의 접두사가 아니기 때문에 0을 return 합니다.
    `,
  },
  {
    input: ['banana', 'bananan'],
    answer: 0,
    description: `
      [입출력 예 #4]\n\n
      
      예제 4번에서 is_prefix가 my_string의 접두사가 아니기 때문에 0을 return 합니다.
    `,
  },
];

describe("접두사인지 확인하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
