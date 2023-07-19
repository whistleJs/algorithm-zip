import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'abcdevwxyz',
    answer: 'lllllvwxyz',
    description: `
      [입출력 예 #1]\n\n
      
      0 ~ 4번 인덱스의 문자 'a', 'b', 'c', 'd', 'e'는 각각 'l'보다 앞서는 문자입니다. 따라서 'l'로 고쳐줍니다.\n
      그 외의 문자는 모두 'l'보다 앞서지 않는 문자입니다. 따라서 바꾸지 않습니다.\n
      따라서 'lllllvwxyz'을 return 합니다.
    `,
  },
  {
    input: 'jjnnllkkmm',
    answer: 'llnnllllmm',
    description: `
      [입출력 예 #2]\n\n
      
      0번, 1번, 6번, 7번 인덱스의 문자 'j', 'j', 'k', 'k'는 각각 'l'보다 앞서는 문자입니다. 따라서 'l'로 고쳐줍니다.\n
      그 외의 문자는 모두 'l'보다 앞서지 않는 문자입니다. 따라서 바꾸지 않습니다.\n
      따라서 'llnnllllmm'을 return 합니다.
    `,
  },
];

describe("l로 만들기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
