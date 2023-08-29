import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['cafelatte', 'americanoice', 'hotcafelatte', 'anything'],
    answer: 19000,
    description: `
      [입출력 예 #1]\n\n
      
      철수는 차가운 아메리카노 2잔, 차가운 카페 라테 1잔, 따뜻한 카페 라테 1잔을 주문하게 되므로 결제 금액은 4500 x 2 + 5000 x 2 = 19000원입니다. 따라서 19000을 return 합니다.
    `,
  },
  {
    input: ['americanoice', 'americano', 'iceamericano'],
    answer: 13500,
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 입력에서는 모든 음료를 차가운 아메리카노로 시키게 됩니다. 따라서 결제 금액은 4500 x 3 = 13500원이고 13500을 return 합니다.
    `,
  },
];

describe("커피 심부름", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
