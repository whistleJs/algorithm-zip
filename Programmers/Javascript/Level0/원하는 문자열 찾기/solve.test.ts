import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['AbCdEfG', 'aBc'],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      'AbCdEfG'의 0~2번 인덱스의 문자열은 'AbC'이며, 이는 pat인 'aBc'와 같습니다. 따라서 1을 return 합니다.
    `,
  },
  {
    input: ['aaAA', 'aaaaa'],
    answer: 0,
    description: `
      [입출력 예 #2]\n\n
      
      myString의 길이가 pat보다 더 짧기 때문에 myString의 부분 문자열 중 pat와 같은 문자열이 있을 수 없습니다. 따라서 0을 return 합니다.
    `,
  },
];

describe("원하는 문자열 찾기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
