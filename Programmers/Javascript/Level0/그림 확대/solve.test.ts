import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string[], number];
type TestCaesAnswer = string[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      [
        '.xx...xx.',
        'x..x.x..x',
        'x...x...x',
        '.x.....x.',
        '..x...x..',
        '...x.x...',
        '....x....'
      ],
      2
    ],
    answer: [
      '..xxxx......xxxx..',
      '..xxxx......xxxx..',
      'xx....xx..xx....xx',
      'xx....xx..xx....xx',
      'xx......xx......xx',
      'xx......xx......xx',
      '..xx..........xx..',
      '..xx..........xx..',
      '....xx......xx....',
      '....xx......xx....',
      '......xx..xx......',
      '......xx..xx......',
      '........xx........',
      '........xx........'
    ],
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `,
  },
  {
    input: [
      [
        'x.x',
        '.x.',
        'x.x'
      ],
      3
    ],
    answer: [
      'xxx...xxx',
      'xxx...xxx',
      'xxx...xxx',
      '...xxx...',
      '...xxx...',
      '...xxx...',
      'xxx...xxx',
      'xxx...xxx',
      'xxx...xxx'
    ],
    description: `
      [입출력 예 #2]\n\n
      
      설명 없습니다.
    `,
  },
];

describe("그림 확대", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
