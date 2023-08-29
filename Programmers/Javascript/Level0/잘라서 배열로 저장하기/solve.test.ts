import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, number];
type TestCaesAnswer = string[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['abc1Addfggg4556b', 6],
    answer: ['abc1Ad', 'dfggg4', '556b'],
    description: `
      [입출력 예 #1]\n\n
      
      'abc1Addfggg4556b' 를 길이 6씩 잘라 배열에 저장한 ['abc1Ad', 'dfggg4', '556b']를 return해야 합니다.
    `,
  },
  {
    input: ['abcdef123', 3],
    answer: ['abc', 'def', '123'],
    description: `
      [입출력 예 #2]\n\n
      
      'abcdef123' 를 길이 3씩 잘라 배열에 저장한 ['abc', 'def', '123']를 return해야 합니다.
    `,
  },
];

describe("잘라서 배열로 저장하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
