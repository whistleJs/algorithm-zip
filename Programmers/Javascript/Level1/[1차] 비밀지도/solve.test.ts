import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number[], number[]];
type TestCaesAnswer = string[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      5,
      [9, 20, 28, 18, 11],
      [30, 1, 21, 17, 28]
    ],
    answer: [
      '#####',
      '# # #',
      '### #',
      '#  ##',
      '#####'
    ],
    description: `
    [입출력 예 #1]\n\n

    설명은 README.md 링크에 있습니다.
    `
  },
  {
    input: [
      6,
      [46, 33, 33, 22, 31, 50],
      [27, 56, 19, 14, 14, 10]
    ],
    answer: [
      '######',
      '###  #',
      '##  ##',
      ' #### ',
      ' #####',
      '### # '
    ],
    description: `
    [입출력 예 #2]\n\n

    설명은 README.md 링크에 있습니다.
    `
  },
];

describe('[1차] 비밀지도', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
