import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, number[]];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      'cvsgiorszzzmrpaqpe',
      [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]
    ],
    answer: 'programmers',
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 my_string에서 인덱스 3, 5, 6, 11, 12, 14, 16, 17에 해당하는 글자는 각각 g, o, r, m, r, a, p, e이므로 my_string에서 index_list에 들어있는 원소에 해당하는 인덱스의 글자들은 각각 순서대로 p, r, o, g, r, a, m, m, e, r, s입니다. 따라서 'programmers'를 return 합니다.
    `,
  },
  {
    input: [
      'zpiaz',
      [1, 2, 0, 0, 3]
    ],
    answer: 'pizza',
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 my_string에서 인덱스 0, 1, 2, 3에 해당하는 글자는 각각 z, p, i, a이므로 my_string에서 index_list에 들어있는 원소에 해당하는 인덱스의 글자들은 각각 순서대로 p, i, z, z, a입니다. 따라서 'pizza'를 return 합니다.
    `,
  },
];

describe("글자 이어 붙여 문자열 만들기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
