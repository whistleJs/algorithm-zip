import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string[], string[]];
type TestCaesAnswer = 1 | 2;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      ['p', 'o', 's'],
      ['sod', 'eocd', 'qixm', 'adio', 'soo']
    ],
    answer: 2,
    description: `
      [입출력 예 #1]\n\n
      
      'p', 'o', 's' 를 조합해 만들 수 있는 단어가 dic에 존재하지 않습니다. 따라서 2를 return합니다.
    `,
  },
  {
    input: [
      ['z', 'd', 'x'],
      ['def', 'dww', 'dzx', 'loveaw']
    ],
    answer: 1,
    description: `
      [입출력 예 #2]\n\n
      
      'z', 'd', 'x' 를 조합해 만들 수 있는 단어 'dzx'가 dic에 존재합니다. 따라서 1을 return합니다.
    `,
  },
  {
    input: [
      ['s', 'o', 'm', 'd'],
      ['moos', 'dzx', 'smm', 'sunmmo', 'som']
    ],
    answer: 2,
    description: `
      [입출력 예 #3]\n\n
      
      's', 'o', 'm', 'd' 를 조합해 만들 수 있는 단어가 dic에 존재하지 않습니다. 따라서 2을 return합니다.
    `,
  },
];

describe("외계어 사전", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
