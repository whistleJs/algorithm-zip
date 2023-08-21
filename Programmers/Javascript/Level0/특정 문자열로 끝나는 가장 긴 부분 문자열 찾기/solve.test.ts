import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['AbCdEFG', 'dE'],
    answer: 'AbCdE',
    description: `
      [입출력 예 #1]\n\n
      
      'AbCdEFG'에서 'dE'는 한 번 등장하며 처음부터 해당 위치까지 잘라내면 'AbCdE'가 됩니다.\n
      따라서 이 문자열이 'dE'로 끝나는 가장 긴 문자열이며, 'AbCdE'를 return 합니다.
    `,
  },
  {
    input: ['AAAAaaaa', 'a'],
    answer: 'AAAAaaaa',
    description: `
      [입출력 예 #2]\n\n
      
      'AAAAaaaa'에서 'a'는 총 네 번 등장하며 이 중 가장 마지막에 있는 위치까지 잘라내면 'AAAAaaaa'가 됩니다.\n
      따라서 이 문자열이 'a'로 끝나는 가장 긴 문자열이며, 'AAAAaaaa'를 return 합니다.
    `,
  },
];

describe("특정 문자열로 끝나는 가장 긴 부분 문자열 찾기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
