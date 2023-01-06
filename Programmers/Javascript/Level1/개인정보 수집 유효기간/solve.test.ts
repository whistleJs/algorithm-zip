import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string[], string[]];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [
      '2022.05.19',
      ['A 6', 'B 12', 'C 3'],
      ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
    ],
    answer: [1, 3],
    description: `
      [입출력 예 #1]\n\n
      
      문제 예시와 같습니다.
    `
  },
  {
    input: [
      '2020.01.01',
      ['Z 3', 'D 5'],
      ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z']
    ],
    answer: [1, 4, 5],
    description: `
      [입출력 예 #2]\n\n
      
      첫 번째 개인정보는 D약관에 의해 2019년 5월 28일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.\n
      두 번째 개인정보는 Z약관에 의해 2020년 2월 14일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.\n
      세 번째 개인정보는 D약관에 의해 2020년 1월 1일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.\n
      네 번째 개인정보는 D약관에 의해 2019년 11월 28일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.\n
      다섯 번째 개인정보는 Z약관에 의해 2019년 3월 27일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.\n
    `
  }
];

describe('개인정보 수집 유효기간', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
