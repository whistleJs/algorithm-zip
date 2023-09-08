import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [[string, string], [string, string][]];
type TestCaesAnswer = 'login' | 'wrong pw' | 'fail';

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      ['meosseugi', '1234'],
      [
        ['rardss', '123'],
        ['yyoom', '1234'],
        ['meosseugi', '1234']
      ]
    ],
    answer: 'login',
    description: `
      [입출력 예 #1]\n\n
      
      db에 같은 정보의 계정이 있으므로 'login'을 return합니다.
    `,
  },
  {
    input: [
      ['programmer01', '15789'],
      [
        ['programmer02', '111111'],
        ['programmer00', '134'],
        ['programmer01', '1145']
      ]
    ],
    answer: 'wrong pw',
    description: `
      [입출력 예 #2]\n\n
      
      db에 아이디는 같지만 패스워드가 다른 계정이 있으므로 'wrong pw'를 return합니다.
    `,
  },
  {
    input: [
      ['rabbit04', '98761'],
      [
        ['jaja11', '98761'],
        ['krong0313', '29440'],
        ['rabbit00', '111333']
      ]
    ],
    answer: 'fail',
    description: `
      [입출력 예 #3]\n\n
      
      db에 아이디가 맞는 계정이 없으므로 'fail'을 return합니다.
    `,
  },
];

describe("로그인 성공?", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
