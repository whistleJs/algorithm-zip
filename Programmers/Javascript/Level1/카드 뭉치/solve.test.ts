import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string[], string[], string[]];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      ['i', 'drink', 'water'],
      ['want', 'to'],
      ['i', 'want', 'to', 'drink', 'water']
    ],
    answer: 'Yes',
    description: `
      [입출력 예 #1]\n\n
      
      본문과 같습니다.
    `
  },
  {
    input: [
      ['i', 'water', 'drink'],
      ['want', 'to'],
      ['i', 'want', 'to', 'drink', 'water']
    ],
    answer: 'No',
    description: `
      [입출력 예 #2]\n\n
      
      cards1에서 'i'를 사용하고 cards2에서 'want'와 'to'를 사용하여 'i want to'까지는 만들 수 있지만\n
      'water'가 'drink'보다 먼저 사용되어야 하기 때문에 해당 문장을 완성시킬 수 없습니다.\n\n
      
      따라서 'No'를 반환합니다.
    `
  }
];

describe('카드 뭉치', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
