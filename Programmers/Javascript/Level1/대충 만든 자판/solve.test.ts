import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string[], string[]];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      ['ABACD', 'BCEFD'],
      ['ABCD', 'AABB']
    ],
    answer: [9, 4],
    description: `
      [입출력 예 #1]\n\n
      
      'ABCD'의 경우, 1번 키 한 번 → A / 2번 키 한 번 → B / 2번 키 두 번 → C / 1번 키 다섯 번 → D / 따라서 총합인 9를 첫 번째 인덱스에 저장합니다.\n
      'AABB'의 경우, 1번 키 한 번 → A / 1번 키 한 번 → A / 2번 키 한 번 → B / 2번 키 한 번 → B / 따라서 총합인 4를 두 번째 인덱스에 저장합니다.\n
      결과적으로 [9, 4]를 return 합니다.
    `
  },
  {
    input: [
      ['AA'],
      ['B']
    ],
    answer: [-1],
    description: `
      [입출력 예 #2]\n\n
      
      'B'의 경우, 'B'가 어디에도 존재하지 않기 때문에 -1을 첫 번째 인덱스에 저장합니다.\n
      결과적으로 [-1]을 return 합니다.
    `
  },
  {
    input: [
      ['AGZ', 'BSSS'],
      ['ASA', 'BGZ']
    ],
    answer: [4, 6],
    description: `
      [입출력 예 #2]\n\n
      
      'ASA'의 경우, 1번 키 한 번 → A / 2번 키 두 번 → S / 1번 키 한 번 → A / 따라서 총합인 4를 첫 번째 인덱스에 저장합니다.\n
      'BGZ'의 경우, 2번 키 한 번 → B / 1번 키 두 번 → G / 1번 키 세 번 → Z / 따라서 총합인 6을 두 번째 인덱스에 저장합니다.\n
      결과적으로 [4, 6]을 return 합니다.
    `
  }
];

describe('대충 만든 자판', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
